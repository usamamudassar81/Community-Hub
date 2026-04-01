import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

const StartingScreen = () => {

    const router = useRouter();

    const handleNavigator = () => {
        router.replace("/(main)");
    };

    return (
        <View style={styles.MainContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/images/Splashicon.png")}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyHeading}>
                    Fall in Love with Coffee in Blissful Delight!
                </Text>
                <Text style={styles.bodyText}>
                    Welcome to our cozy coffee corner, where every cup is a delightful treat for you.
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={handleNavigator} style={styles.footerBtn}>
                    <Text style={styles.footerBtnText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default StartingScreen;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageContainer: {
        height: height * 0.6,
        width: "100%",
    },
    headerImage: {
        width: "100%",
        height: "100%",
    },
    bodyContainer: {
        flex: 0,
        paddingHorizontal: 65,
        gap: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050505",
    },
    bodyHeading: {
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 40,
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 72,
        position: "absolute",
        bottom: 20,
    },
    bodyText: {
        fontSize: 16,
        color: "#A2A2A2",
        textAlign: "center",
        lineHeight: 22,
        marginTop: 35,
        paddingTop: 55,
    },
    footerContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 60,
        backgroundColor: "#050505",
        marginBottom: 0,
    },
    footerBtn: {
        backgroundColor: "#C67C4E",
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 30,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    footerBtnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});






// import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
// import { useRouter } from "expo-router";

// const { height } = Dimensions.get("window");

// const StartingScreen = () => {

//   const router = useRouter();

//   const handleNavigator = () => {
//     router.replace("/(main)");
//   };

//   return (
//     <View style={styles.MainContainer}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={require("../../assets/images/Splashicon.png")}
//           style={styles.headerImage}
//           resizeMode="cover"
//         />
//       </View>
//       <View style={styles.bodyContainer}>
//         <Text style={styles.bodyHeading}>
//           Fall in Love with Coffee in Blissful Delight!
//         </Text>
//         <Text style={styles.bodyText}>
//           Welcome to our cozy coffee corner, where every cup is a delightful treat for you.
//         </Text>
//       </View>
//       <View style={styles.footerContainer}>
//         <TouchableOpacity onPress={handleNavigator} style={styles.footerBtn}>
//           <Text style={styles.footerBtnText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default StartingScreen;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   imageContainer: {
//     height: height * 0.6,
//     width: "100%",
//   },
//   headerImage: {
//     width: "100%",
//     height: "100%",
//   },
//   bodyContainer: {
//     flex: 0,
//     paddingHorizontal: 65,
//     gap: 45,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#050505",
//   },
//   bodyHeading: {
//     fontSize: 28,
//     fontWeight: "700",
//     lineHeight: 40,
//     color: "#FFFFFF",
//     textAlign: "center",
//     marginBottom: 72,
//     position: "absolute",
//     bottom: 20,
//   },
//   bodyText: {
//     fontSize: 16,
//     color: "#A2A2A2",
//     textAlign: "center",
//     lineHeight: 22,
//     marginTop: 35,
//     paddingTop: 55,
//   },
//   footerContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     paddingBottom: 60,
//     backgroundColor: "#050505",
//     marginBottom: 0,
//   },
//   footerBtn: {
//     backgroundColor: "#C67C4E",
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 30,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   footerBtnText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });





// import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
// import { useRouter } from "expo-router";

// const { height } = Dimensions.get("window");

// const StartingScreen = () => {

//   const router = useRouter();

//   const handleNavigator = () => {
//     router.replace("/(main)");
//   };

//   return (
//     <View style={styles.MainContainer}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={require("../../assets/images/Splashicon.png")}
//           style={styles.headerImage}
//           resizeMode="cover"
//         />
//       </View>
//       <View style={styles.bodyContainer}>
//         <Text style={styles.bodyHeading}>
//           Fall in Love with Coffee in Blissful Delight!
//         </Text>
//         <Text style={styles.bodyText}>
//           Welcome to our cozy coffee corner, where every cup is a delightful treat for you.
//         </Text>
//       </View>
//       <View style={styles.footerContainer}>
//         <TouchableOpacity onPress={handleNavigator} style={styles.footerBtn}>
//           <Text style={styles.footerBtnText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default StartingScreen;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   imageContainer: {
//     height: height * 0.6,
//     width: "100%",
//   },
//   headerImage: {
//     width: "100%",
//     height: "100%",
//   },
//   bodyContainer: {
//     flex: 0,
//     paddingHorizontal: 65,
//     gap: 45,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#050505",
//   },
//   bodyHeading: {
//     fontSize: 28,
//     fontWeight: "700",
//     lineHeight: 40,
//     color: "#FFFFFF",
//     textAlign: "center",
//     marginBottom: 72,
//     position: "absolute",
//     bottom: 20,
//   },
//   bodyText: {
//     fontSize: 16,
//     color: "#A2A2A2",
//     textAlign: "center",
//     lineHeight: 22,
//     marginTop: 35,
//     paddingTop: 55,
//   },
//   footerContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     paddingBottom: 60,
//     backgroundColor: "#050505",
//     marginBottom: 0,
//   },
//   footerBtn: {
//     backgroundColor: "#C67C4E",
//     paddingVertical: 15,
//     paddingHorizontal: 80,
//     borderRadius: 30,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   footerBtnText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });
