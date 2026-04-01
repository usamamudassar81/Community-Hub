


import { useEffect } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

const { width } = Dimensions.get("window");

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Hide the native splash screen as soon as our custom splash screen mounts
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplash();

    // Artificial delay for custom splash experience
    const timer = setTimeout(() => {
      router.replace("/(main)/(tabs)");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require("../../assets/images/Splashicon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* <Text style={styles.title}>
          <Text style={styles.titleNeighbor}>Neighbor</Text>
          <Text style={styles.titleHub}>Hub</Text>
        </Text>
        <Text style={styles.subtitle}>
          Community information at a glance
        </Text> */}
      </View>

      <Image
        source={require("../../assets/images/footerSlash.png")}
        style={styles.bottomWaves}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F2F7", // Very light off-white/lavender
    alignItems: "center",
    justifyContent: "center",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    marginTop: -80, // slightly lift it up from true center
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 10,
    letterSpacing: -0.5,
  },
  titleNeighbor: {
    color: "#30136A", // Dark purple
  },
  titleHub: {
    color: "#C53AA3", // Magenta/pink
  },
  subtitle: {
    fontSize: 16,
    color: "#6B6A75",
    fontWeight: "400",
  },
  bottomWaves: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: width * 0.8, // Adjust ratio dynamically based on screen width
    zIndex: 1,
    opacity: 0.9,
  },
});
