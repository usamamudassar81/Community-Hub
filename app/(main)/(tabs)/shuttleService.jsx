

import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderTopAppBar from "../../components/header";
const shuttleData = {
    "Route A": [
        { id: 1, time: "07:15 AM", stop: "Lilly A-Main Gate", terminal: "Uptown Terminal", status: "active" },
        { id: 2, time: "07:30 AM", stop: "Main-Lilly A", terminal: "Uptown Terminal", status: "scheduled" },
        { id: 3, time: "08:00 AM", stop: "Lilly A-Main Gate", terminal: "Uptown Terminal", status: "scheduled" },
        { id: 4, time: "08:30 AM", stop: "Main-Lilly A", terminal: "Uptown Terminal", status: "terminal" },
        { id: 5, time: "09:00 AM", stop: "Lilly A-Main Gate", terminal: "Uptown Terminal", status: "terminal" },
        { id: 6, time: "09:30 AM", stop: "Main-Lilly A", terminal: "Uptown Terminal", status: "terminal" },
        { id: 7, time: "10:00 AM", stop: "Lilly A-Main Gate", terminal: "Uptown Terminal", status: "terminal" },
        { id: 8, time: "10:30 AM", stop: "Main-Lilly A", terminal: "Uptown Terminal", status: "terminal" },
        { id: 9, time: "11:00 AM", stop: "Lilly A-Main Gate", terminal: "Uptown Terminal", status: "terminal" },
        { id: 10, time: "11:30 AM", stop: "Main-Lilly A", terminal: "Uptown Terminal", status: "terminal" },
        { id: 11, time: "12:00 PM", stop: "Lilly A-Main Gate", terminal: "Uptown Terminal", status: "terminal" },
        { id: 12, time: "12:30 PM", stop: "Main-Lilly A", terminal: "Uptown Terminal", status: "terminal" },
    ],
    "Route B": [
        { id: 1, time: "01:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "active" },
        { id: 2, time: "02:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "scheduled" },
        { id: 3, time: "02:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "scheduled" },
        { id: 4, time: "03:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "terminal" },
        { id: 5, time: "03:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "terminal" },
        { id: 6, time: "04:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "terminal" },
        { id: 7, time: "04:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "terminal" },
        { id: 8, time: "05:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "terminal" },
        { id: 9, time: "05:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "terminal" },
        { id: 10, time: "06:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "terminal" },
        { id: 11, time: "06:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "terminal" },
        { id: 12, time: "07:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "terminal" },
        { id: 13, time: "07:30 PM", stop: "Lilly A-Main Gate", terminal: "Downtown Hub", status: "terminal" },
        { id: 14, time: "08:00 PM", stop: "Main-Lilly A", terminal: "Downtown Hub", status: "terminal" },
    ]
};

const ShuttleServiceScreen = () => {
    const [activeRoute, setActiveRoute] = useState("Route A");

    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderTopAppBar
                logo={require("../../../assets/images/Hublogo.png")}
                profileImage={require("../../../assets/images/profile.png")}
                onProfilePress={() => console.log("Profile pressed")}
            />
            <ScrollView style={styles.scrollView}>
                <View style={styles.column}>
                    <View style={styles.view}>
                        <Text style={styles.text}>
                            {"Shuttle Service Timing"}
                        </Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text2}>
                            {"Reliable community transportation at your fingertips. View real-time schedules and\nroute details below."}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, activeRoute === "Route A" && styles.activeTab]}
                        onPress={() => setActiveRoute("Route A")}
                    >
                        <Text style={[styles.text3, activeRoute === "Route A" && styles.activeTabText]}>
                            {"Route A"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, activeRoute === "Route B" && styles.activeTab]}
                        onPress={() => setActiveRoute("Route B")}
                    >
                        <Text style={[styles.text4, activeRoute === "Route B" && styles.activeTabText]}>
                            {"Route B"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={styles.column2}>
                        <View style={styles.column3}>
                            <View style={styles.row2}>
                                <Text style={styles.text5}>
                                    {"TIME"}
                                </Text>
                                <Text style={styles.text5}>
                                    {"STOP NAME"}
                                </Text>
                                <Text style={styles.text5}>
                                    {"DIRECTION"}
                                </Text>
                            </View>
                            <View style={styles.column4}>
                                <ScrollView nestedScrollEnabled={true} style={{ height: 380 }}>
                                    {shuttleData[activeRoute].map((stop, index) => {
                                        const isLast = index === shuttleData[activeRoute].length - 1;

                                        return (
                                            <View key={stop.id} style={[styles.shuttleRow, isLast && { borderBottomWidth: 0 }]}>
                                                <View style={styles.colTime}>
                                                    <View style={styles.timeBadge}>
                                                        <Text style={styles.text6}>{stop.time}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.colStop}>
                                                    <Text style={styles.text9}>{stop.stop}</Text>
                                                </View>
                                                <View style={styles.colDirection}>
                                                    <Image
                                                        source={require("../../../assets/images/UpmoveIcon.png")}
                                                        resizeMode={"contain"}
                                                        style={styles.arrowIcon}
                                                    />
                                                    <Text style={styles.text2}>{stop.terminal}</Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View style={styles.supportBox}>
                        <View style={styles.row7}>
                            <Image
                                source={require("../../../assets/images/needHelp.png")}
                                resizeMode={"stretch"}
                                style={styles.image2}
                            />
                            <View style={styles.column5}>
                                <View style={styles.view5}>
                                    <Text style={styles.text11}>
                                        {"Need Help?"}
                                    </Text>
                                </View>
                                <View style={styles.view6} onPress={() => alert("Coming Soon")}>
                                    <Text style={styles.text12} onPress={() => alert("Coming Soon")}>
                                        {"Support available 24/7 for commuters."}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.row8}>
                            <Image
                                source={require("../../../assets/images/alertIcon.png")}
                                resizeMode={"stretch"}
                                style={styles.image3}
                            />
                            <View >
                                <View style={styles.view7} onPress={() => alert("Coming Soon")}>
                                    <Text style={styles.text4} onPress={() => alert("Coming Soon")}>
                                        {"Alert Subscriptions"}
                                    </Text>
                                </View>
                                <View style={styles.view8} onPress={() => alert("Coming Soon")}>
                                    <Text style={styles.text13} onPress={() => alert("Coming Soon")}>
                                        {"Get notified about real-time delays."}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style={styles.column6}>
                            <View style={styles.row9}>
                                <Image
                                    source={require("../../../assets/images/travelIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image4}
                                />
                                <View style={styles.column7}>
                                    <View style={styles.view9}>
                                        <Text style={styles.text14}>
                                            {"Travel Notice"}
                                        </Text>
                                    </View>
                                    <View style={styles.view10}>
                                        <Text style={styles.text15}>
                                            {"Potential delays may occur during\npeak hours (08:00 - 10:00) due to\nRain."}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.box3}>
                                </View>
                            </View>
                            <View style={styles.row10}>

                            </View>
                        </View>
                        <ImageBackground
                            source={require("../../../assets/images/servicemapPreview.png")}
                            resizeMode="cover"
                            style={styles.column8}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                colors={["#7C3AEDCC", "#7C3AED4D"]}
                                style={styles.row11} onPress={() => alert("Coming Soon")}>
                                <Image
                                    source={require("../../../assets/images/mapIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image6}
                                />
                                <Text style={styles.text3}>
                                    {"View Full Route Map (Coming Soon)"}
                                </Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    absoluteImage: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        borderRadius: 20,
        height: 191,
    },
    box: {
        width: 31,
        height: 8,
    },
    box2: {
        flex: 1,
    },
    box3: {
        width: 20,
        height: 20,
    },
    button: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF00",
        borderRadius: 9999,
        paddingVertical: 18,
        shadowColor: "#0000001A",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        elevation: 4,
    },
    button2: {
        alignSelf: "flex-start",
        backgroundColor: "#B88EFF45",
        borderRadius: 6,
        paddingVertical: 13,
        paddingHorizontal: 8,
    },
    button3: {
        backgroundColor: "#B88EFF45",
        borderRadius: 6,
        paddingVertical: 13,
        paddingHorizontal: 8,
    },
    button4: {
        backgroundColor: "#B88EFF45",
        borderRadius: 6,
        paddingVertical: 13,
        paddingHorizontal: 9,
    },
    column: {
        marginBottom: 19,
    },
    column2: {
        backgroundColor: "#F4F7F8",
        borderRadius: 24,
        padding: 16,
        marginBottom: 31,
    },
    column3: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 18,
        shadowColor: "#0000000D",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        elevation: 2,
    },
    column4: {
        paddingBottom: 34,
    },
    column5: {
        flex: 1,
        marginRight: 45,
    },
    column6: {
        backgroundColor: "#F7D1E7",
        borderRadius: 10,
        paddingVertical: 24,
        marginBottom: 21,
    },
    column7: {
        flex: 1,
        marginRight: 12,
    },
    column8: {
        borderRadius: 20,
        marginBottom: 48,
        overflow: "hidden",
    },
    image: {
        width: 8,
        height: 11,
        marginRight: 8,
    },
    image2: {
        borderRadius: 20,
        width: 44,
        height: 42,
        marginLeft: 20,
        marginRight: 16,
    },
    image3: {
        borderRadius: 20,
        width: 44,
        height: 44,
        marginLeft: 20,
        marginRight: 16,
    },
    image4: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    image5: {
        width: 22,
        height: 21,
        marginRight: 12,
    },
    image6: {
        width: 9,
        height: 11,
        marginRight: 8,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#8989891F",
        borderRadius: 9999,
        padding: 6,
        marginBottom: 37,
    },
    row2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#7C3AED",
        paddingVertical: 19,
        paddingHorizontal: 23,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    row3: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 36,
    },
    row4: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 26,
        paddingHorizontal: 8,
    },
    row5: {
        flexDirection: "row",
        paddingVertical: 1,
        marginBottom: 60,
        marginHorizontal: 11,
    },
    row6: {
        flexDirection: "row",
        paddingVertical: 1,
        marginHorizontal: 10,
    },
    row7: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        backgroundColor: "#F7D1E7",
        paddingVertical: 10,
        borderRadius: 10,
    },
    row8: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E3E9EB",
        borderRadius: 15,
        paddingVertical: 10,
        // paddingHorizontal: 16,

    },
    row9: {
        flexDirection: "row",
        marginBottom: 16,
        marginLeft: 24,
        marginRight: 13,
    },
    row10: {
        flexDirection: "row",
        paddingTop: 17,
        marginHorizontal: 24,
    },
    row11: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 157,
        paddingBottom: 20,
        paddingLeft: 16,
    },
    scrollView: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 24,
    },
    text: {
        color: "#2C3436",
        fontSize: 28,
        fontWeight: "bold",
    },
    text2: {
        color: "#596063",
        fontSize: 10,
    },
    text3: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    text4: {
        color: "#596063",
        fontSize: 16,
        fontWeight: "bold",
    },
    text5: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    text6: {
        color: "#7C3AED",
        fontSize: 10,
        fontWeight: "bold",
    },
    text7: {
        color: "#2C3436",
        fontSize: 10,
        marginRight: 10,
        width: 140,
    },
    text8: {
        color: "#596063",
        fontSize: 14,
        flex: 1,
    },
    text9: {
        color: "#2C3436",
        fontSize: 9,
        // marginRight: 10,
        width: 120,
    },
    text10: {
        color: "#2C3436",
        fontSize: 10,
        width: 140,
    },
    text11: {
        color: "#A72368",
        fontSize: 16,
        fontWeight: "bold",
        display: "none",
        visibility: "hidden",
    },
    text12: {
        color: "#A72368",
        fontSize: 12,
    },
    text13: {
        color: "#596063",
        fontSize: 12,
    },
    text14: {
        color: "#A72368",
        fontSize: 18,
        fontWeight: "bold",
    },
    text15: {
        color: "#3F3F46",
        fontSize: 14,
        // display: "none",
        // visibility: "hidden",
    },
    view: {
        paddingBottom: 1,
        paddingRight: 23,
        marginBottom: 12,
    },
    view2: {
        paddingBottom: 1,
        paddingRight: 46,
    },
    view3: {
        flex: 1,
        alignItems: "center",
        borderRadius: 9999,
        paddingVertical: 18,
    },
    view4: {
        width: 80,
        marginRight: 12,
    },
    view5: {
        paddingVertical: 3,
        paddingLeft: 1,
    },
    view6: {
        paddingVertical: 2,
        borderRadius: 10,
    },
    view7: {
        alignSelf: "flex-start",
        paddingVertical: 3,
        paddingRight: 49,
    },
    view8: {
        alignSelf: "flex-start",
        paddingVertical: 2,
    },
    view9: {
        paddingVertical: 4,
        marginBottom: 4,
    },
    view10: {
        paddingVertical: 4,
        paddingHorizontal: 1,
    },
    view11: {
        flex: 1,
        paddingVertical: 4,
        display: "none",
        visibility: "hidden",
    },
    activeTab: {
        backgroundColor: "#7C3AED",
    },
    activeTabText: {
        color: "#FFFFFF",
    },
    supportBox: {
        backgroundColor: "#F4F7F8",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    shuttleRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#F3F4F6",
    },
    colTime: {
        width: 85,
        alignItems: "center",
    },
    timeBadge: {
        backgroundColor: "#F3E8FF",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    colStop: {
        flex: 1,
        paddingHorizontal: 10,
        width: 120,
    },
    colDirection: {
        width: 105,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        paddingLeft: 44,
    },
    arrowIcon: {
        width: 12,
        height: 12,
        marginRight: 6,
        tintColor: "#7C3AED",
    },
});

export default ShuttleServiceScreen;