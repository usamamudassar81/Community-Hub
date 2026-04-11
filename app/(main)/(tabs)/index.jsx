
import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput, StyleSheet, } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import HeaderTopAppBar from "../../components/header";
export default function DashboardScreen(props) {
    const router = useRouter();
    const [textInput1, onChangeTextInput1] = useState('');
    const [textInput2, onChangeTextInput2] = useState('');
    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderTopAppBar
                logo={require("../../../assets/images/Hublogo.png")}
                profileImage={require("../../../assets/images/profile.png")}
                onProfilePress={() => console.log("Profile pressed")}
            />
            <ScrollView style={styles.scrollView}>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        {"Community Services"}
                    </Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text2}>
                        {"Quick access to daily info"}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.column}
                    activeOpacity={0.8}
                    onPress={() => router.push("/(main)/(tabs)/waterTiming")}
                >
                    <View style={styles.row}>
                        <Image
                            source={require("../../../assets/images/Overlay.png")}
                            resizeMode={"stretch"}
                            style={styles.image}
                        />
                        <View style={styles.button}>
                            <Text style={styles.text3} onPress={() => router.push("/(main)/(tabs)/waterTiming")}>
                                {"Open"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.column2}>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"Water Plant Timing"}
                            </Text>
                        </View>
                        <View style={styles.view4}>
                            <Text style={styles.text5}>
                                {"Next distribution cycle starts at\n06:00 AM tomorrow."}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.column3}
                    activeOpacity={0.8}
                    onPress={() => router.push("/(main)/(tabs)/shuttleService")}
                >
                    <Image
                        source={require("../../../assets/images/shuttle.png")}
                        resizeMode={"stretch"}
                        style={styles.image2}
                    />
                    <View style={styles.column4}>
                        <View style={styles.view5}>
                            <Text style={styles.text6}>
                                {"Shuttle Service"}
                            </Text>
                        </View>
                        <View style={styles.view6}>
                            <Text style={styles.text7}>
                                {"Live tracking of the inter-sector\ncommunity van."}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.column3}
                    activeOpacity={0.8}
                    onPress={() => router.push("/(main)/(tabs)/contacts")}
                >
                    <Image
                        source={require("../../../assets/images/emergency.png")}
                        resizeMode={"stretch"}
                        style={styles.image2}
                    />
                    <View style={styles.column4}>
                        <View style={styles.view5}>
                            <Text style={styles.text8}>
                                {"Emergency"}
                            </Text>
                        </View>
                        <View style={styles.view7}>
                            <Text style={styles.text9}>
                                {"Direct lines for medical, security, and fire services."}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.row2}
                    activeOpacity={0.9}
                    onPress={() => alert("Coming Soon!")}
                >
                    <View style={styles.column5}>
                        <View style={styles.row3}>
                            <Image
                                source={require("../../../assets/images/rightArrow.png")}
                                resizeMode={"stretch"}
                                style={styles.image3}
                            />
                            <View style={styles.view8}>
                                <Text style={styles.text10}>
                                    {"Latest Announcement"}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.view5}>
                            <Text style={styles.text11}>
                                {"Weekend\nCommunity Fair"}
                            </Text>
                        </View>
                        <View style={styles.view6}>
                            <Text style={styles.text12}>
                                {"Join us this Saturday for th…"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.button2}>
                        <Image
                            source={require("../../../assets/images/rightArrow.png")}
                            resizeMode={"stretch"}
                            style={styles.image4}
                        />
                    </View>
                </TouchableOpacity>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false} style={styles.scrollView2}>
                    <TouchableOpacity style={styles.button3} onPress={() => alert('Pressed!')}>
                        <Text style={styles.text13}>
                            {"Electricity"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={() => router.push("/(main)/(tabs)/gymTiming")}>
                        <Text style={styles.text13}>
                            {"GYM Timing"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={() => alert('Coming Soon!')}>
                        <Text style={styles.text13}>
                            {"Waste Mgmt"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.column6}>
                    <Image
                        source={require("../../../assets/images/community.png")}

                        resizeMode={"stretch"}
                        style={styles.image5}
                    />
                    <View style={styles.column7}>
                        <TouchableOpacity style={styles.button4} onPress={() => alert('Pressed!')}>
                            <Text style={styles.text14}>
                                {"Verified Community"}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.view9}>
                            <Text style={styles.text15}>
                                {"Trusted by 2,400+\nResidents"}
                            </Text>
                        </View>
                        <View style={styles.view10}>
                            <Text style={styles.text16}>
                                {"Providing essential services and up-to-the-minute infrastructure\ninformation since 2018."}
                            </Text>
                        </View>
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
        paddingBottom: 10,
    },
    button: {
        backgroundColor: "#FACC1575",
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 16,
    },
    button2: {
        backgroundColor: "#FFFFFF00",
        borderRadius: 9999,
        padding: 16,
        shadowColor: "#0000001A",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 6,
        elevation: 6,
    },
    button3: {
        backgroundColor: "#F7D1E6",
        borderRadius: 9999,
        paddingVertical: 11,
        paddingHorizontal: 21,
        marginRight: 10,
    },
    button4: {
        backgroundColor: "#A72368",
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 12,
        marginBottom: 23,
    },
    column: {
        backgroundColor: "#FFFFFF",
        borderColor: "#7C3AED",
        borderRadius: 17,
        borderWidth: 1,
        padding: 32,
        marginBottom: 16,
        shadowColor: "#2C34360D",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 40
        },
        shadowRadius: 60,
        elevation: 60,
    },
    column2: {
        paddingTop: 8,
    },
    column3: {
        backgroundColor: "#FFFFFF",
        borderColor: "#216C8C3B",
        borderRadius: 16,
        borderWidth: 1,
        paddingVertical: 32,
        paddingRight: 32,
        marginBottom: 16,
    },
    column4: {
        paddingTop: 6,
        marginLeft: 32,
    },
    column5: {
        flex: 1,
        marginRight: 24,
    },
    column6: {
        backgroundColor: "#F472B64D",
        borderColor: "#ACB3B626",
        borderRadius: 20,
        borderWidth: 1,
        padding: 33,
        paddingRight: 50,
        display: "none",
        marginTop: 10,
        // marginRight: 50,

        marginBottom: 48,
    },
    column7: {
        alignItems: "center",
        paddingBottom: 7,
    },
    image: {
        width: 56,
        height: 56,
        // marginRight: 50,
        // paddingRight: 50,
        // paddingLeft: -50,
    },
    image2: {
        borderRadius: 16,
        width: 48,
        height: 48,
        marginBottom: 14,
        marginLeft: 32,
    },
    image3: {
        width: 31,
        height: 31,
        marginRight: 8,
    },
    image4: {
        borderRadius: 9999,
        width: 44,
        height: 44,
    },
    image5: {
        borderRadius: 20,
        height: 192,
        width: 242,
        marginBottom: 32,
        marginRight: 50,
        paddingRight: 50,
        marginRight: 50,
    },
    input: {
        color: "#596063",
        fontSize: 14,
        marginRight: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 9999,
        paddingVertical: 11,
        paddingHorizontal: 20,
    },
    input2: {
        color: "#596063",
        fontSize: 14,
        backgroundColor: "#FFFFFF",
        borderRadius: 9999,
        paddingVertical: 11,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    row2: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF00",
        borderRadius: 20,
        paddingVertical: 31,
        paddingHorizontal: 32,
        marginBottom: 45,
        shadowColor: "#0000001A",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: "#7C3AED",

    },
    row3: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    scrollView: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 24,
    },
    scrollView2: {
        flexDirection: "row",
        paddingVertical: 16,
        marginBottom: 16,
        display: "none",
    },
    text: {
        color: "#2C3436",
        fontSize: 28,
        fontWeight: "bold",
    },
    text2: {
        color: "#596063",
        fontSize: 12,
    },
    text3: {
        color: "#876E09",
        fontSize: 12,
        fontWeight: "bold",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    text4: {
        color: "#2C3436",
        fontSize: 18,
        fontWeight: "bold",
    },
    text5: {
        color: "#747C7E",
        fontSize: 12,
    },
    text6: {
        color: "#2C3436",
        fontSize: 18,
        fontWeight: "bold",
        width: 149,
    },
    text7: {
        color: "#596063",
        fontSize: 12,
        width: 216,
    },
    text8: {
        color: "#2C3436",
        fontSize: 18,
        fontWeight: "bold",
        width: 113,
    },
    text9: {
        color: "#596063",
        fontSize: 12,
    },
    text10: {
        color: "#F2EBFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    text11: {
        color: "#F8F8FF",
        fontSize: 20,
        fontWeight: "bold",
    },
    text12: {
        color: "#F8F8FF",
        fontSize: 12,
    },
    text13: {
        color: "#A72368",
        fontSize: 12,
        fontWeight: "bold",
    },
    text14: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "bold",
    },
    text15: {
        color: "#A72368",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    text16: {
        color: "#466370",
        fontSize: 12,
        textAlign: "center",
    },
    view: {
        paddingBottom: 1,
        paddingRight: 43,
        marginBottom: 4,
    },
    view2: {
        paddingBottom: 1,
        marginBottom: 10,
    },
    view3: {
        paddingBottom: 1,
        paddingRight: 47,
        marginBottom: 8,
    },
    view4: {
        paddingBottom: 1,
        paddingRight: 34,
    },
    view5: {
        paddingBottom: 1,
        marginBottom: 8,
    },
    view6: {
        paddingBottom: 1,
    },
    view7: {
        paddingBottom: 1,
        paddingRight: 24,
    },
    view8: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 3,
        marginRight: 16,
    },
    view9: {
        alignSelf: "stretch",
        marginBottom: 21,
        marginHorizontal: 29,
    },
    view10: {
        alignSelf: "stretch",
        marginHorizontal: 9,
    },
});