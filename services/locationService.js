import * as Location from 'expo-location';

/**
 * Request location permissions and get current user coordinates.
 * @returns {Promise<{latitude: number, longitude: number}>}
 */
export const getUserLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permission to access location was denied');
  }

  const location = await Location.getCurrentPositionAsync({});
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};

/**
 * Watch user location in real-time.
 * @param {function} callback - Function called with new location coordinates.
 * @returns {Promise<Location.LocationSubscription>}
 */
export const watchUserLocation = async (callback) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permission to access location was denied');
  }

  return await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      distanceInterval: 10, // Update location every 10 meters
    },
    (location) => {
      callback({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  );
};
