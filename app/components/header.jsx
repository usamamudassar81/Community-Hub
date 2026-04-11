
import React from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderTopAppBar = ({
    logo,
    profileImage,
    onProfilePress = () => { },
}) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Left Section (Logo) */}
                <View style={styles.leftContainer}>
                    <Image
                        source={logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                {/* <TouchableOpacity
                    style={styles.avatarContainer}
                    onPress={onProfilePress}
                    activeOpacity={0.7}
                >
                    <Image
                        source={profileImage}
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
};

export default HeaderTopAppBar;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#FEFEFE",
    },

    container: {
        height: 66,
        backgroundColor: "#FEFEFE",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 20,
    },

    leftContainer: {
        flex: 1,
    },

    logo: {
        width: 232,
        height: 44,
    },

    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 999,
        backgroundColor: "#E3E9EB",
        borderWidth: 2,
        borderColor: "#93BDFF",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },

    avatar: {
        width: "100%",
        height: "100%",
    },
});