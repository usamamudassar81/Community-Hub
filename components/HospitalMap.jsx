import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


// import { GOOGLE_MAPS_API_KEY } from '@env';
import * as geolib from 'geolib';
import hospitals from '../data/hospitals.json';
import { watchUserLocation } from '../services/locationService';

const { width } = Dimensions.get('window');
const GOOGLE_MAPS_API_KEY = 'AIzaSyA65vMG6AmYj0E_OEE7IdL03-EeSkqAAw0';

// Provided coordinates for testing/demo
const DEMO_COORDS = {
  latitude: 33.4917842,
  longitude: 73.3010304,
};

const HospitalMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestHospital, setNearestHospital] = useState(null);
  const [distance, setDistance] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startTracking = async () => {
    setLoading(true);
    setError(null);
    try {
      // Small timeout to simulate real GPS if on simulator
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        // Fallback to DEMO coordinates if permission denied in development
        setUserLocation(DEMO_COORDS);
        findNearestHospital(DEMO_COORDS);
        setPermissionGranted(true);
        setLoading(false);
        return;
      }

      const subscription = await watchUserLocation((location) => {
        setUserLocation(location);
        findNearestHospital(location);
        setPermissionGranted(true);
        setLoading(false);
      });

      return subscription;
    } catch (err) {
      // In development, handle GPS errors by using demo coordinates
      setUserLocation(DEMO_COORDS);
      findNearestHospital(DEMO_COORDS);
      setPermissionGranted(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    let subscription;

    // We don't start tracking automatically on mount to avoid immediate permission prompts
    // instead, we wait for user interaction or check if already granted.

    return () => {
      if (subscription && typeof subscription.remove === 'function') {
        subscription.remove();
      }
    };
  }, []);

  const findNearestHospital = useCallback((currentLocation) => {
    if (!hospitals || hospitals.length === 0) return;

    // Calculate distances to all hospitals
    const sortedHospitals = hospitals.map(hospital => ({
      ...hospital,
      distance: geolib.getDistance(currentLocation, {
        latitude: hospital.latitude,
        longitude: hospital.longitude,
      })
    })).sort((a, b) => a.distance - b.distance);

    const nearest = sortedHospitals[0];
    setNearestHospital(nearest);

    // Convert meters to miles (1 meter = 0.000621371 miles)

    const distInMiles = (nearest.distance * 0.000621371).toFixed(1);
    setDistance(distInMiles);
  }, []);

  if (permissionGranted === null) {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Nearest Hospital</Text>
          <Text style={styles.subtitle}>Tap to see the live location and route.</Text>
        </View>
        <TouchableOpacity style={styles.actionButton} onPress={startTracking}>
          <Text style={styles.actionButtonText}>Check Live Map</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator size="large" color="#7C3AED" />
        <Text style={styles.loadingText}>Locating nearest hospital...</Text>
      </View>
    );
  }

  if (error || !userLocation) {
    return (
      <View style={styles.card}>
        <Text style={styles.errorText}>{error || "Unable to get location."}</Text>
        <TouchableOpacity style={[styles.actionButton, { marginTop: 15 }]} onPress={startTracking}>
          <Text style={styles.actionButtonText}>Retry Location</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Nearest Hospital</Text>
            <Text style={styles.subtitle}>
              {nearestHospital?.name} — {distance} miles away
            </Text>
          </View>
          <TouchableOpacity style={styles.miniButton} onPress={startTracking}>
            <Text style={styles.miniButtonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          {/* User Marker */}
          <Marker
            coordinate={userLocation}
            title="Your Location"
            pinColor="#7C3AED"
          />

          {/* Hospital Marker */}
          {nearestHospital && (
            <Marker
              coordinate={{
                latitude: nearestHospital.latitude,
                longitude: nearestHospital.longitude,
              }}
              title={nearestHospital.name}
              pinColor="#E11D48"
            />
          )}

          {/* Route Line */}
          {nearestHospital && (
            <MapViewDirections
              origin={userLocation}
              destination={{
                latitude: nearestHospital.latitude,
                longitude: nearestHospital.longitude,
              }}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeWidth={4}
              strokeColor="#7C3AED"
              optimizeWaypoints={true}
              onError={(errorMessage) => {
                console.log('Directions error: ', errorMessage);
              }}
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#ACB3B626",
    borderRadius: 16,
    borderWidth: 1,
    padding: 10,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 60,
    shadowColor: "#0000000D",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    width: '92%',
  },
  header: {
    marginBottom: 15,
  },
  title: {
    color: "#2C3436",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#596063",
    fontSize: 13,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#E3E9EB', // Placeholder gray
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingText: {
    marginTop: 10,
    color: "#596063",
    textAlign: 'center',
  },
  errorText: {
    color: "#E11D48",
    textAlign: 'center',
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: "#7C3AED",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniButton: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  miniButtonText: {
    color: "#7C3AED",
    fontSize: 12,
    fontWeight: '600',
  },
});

export default HospitalMap;
