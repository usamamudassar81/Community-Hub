import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTopAppBar from "../../components/header";
import HospitalMap from "../../../components/HospitalMap";

const ContactsScreen = () => {
    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <HeaderTopAppBar
                logo={require("../../../assets/images/Hublogo.png")}
                profileImage={require("../../../assets/images/profile.png")}
                onProfilePress={() => console.log("Profile pressed")}
            />
            <ScrollView style={styles.scrollView}>
                <View style={styles.column}>
                    <View style={styles.view}>
                        <Text style={styles.text}>
                            {"Important Numbers"}
                        </Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text2}>
                            {"Quick access to essential community\nservices and emergency responders."}
                        </Text>
                    </View>
                </View>
                <View style={styles.column2}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["#A83836", "#FA746F"]}
                        style={styles.column3}>
                        <View style={styles.row}>
                            <Text style={styles.text3}>
                                {"Fire Department"}
                            </Text>
                            <View >
                                <Image

                                    source={require("../../../assets/images/phoneIcon2.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image}
                                />
                                <Image
                                    source={require("../../../assets/images/fireIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.absoluteImage}
                                />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"1122"}
                            </Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.column4}>
                        <View style={styles.row}>
                            <Text style={styles.text5}>
                                {"Medical Emergency"}
                            </Text>
                            <View >
                                <Image
                                    source={require("../../../assets/images/phoneIcon2.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image}
                                />
                                <Image
                                    source={require("../../../assets/images/medicalIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.absoluteImage2}
                                />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"0312-5899363 \n051-111555400"}
                            </Text>
                        </View>
                    </View>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["#2C3436", "#747C7E"]}
                        style={styles.column5}>
                        <View style={styles.row}>
                            <Text style={styles.text6}>
                                {"Police Dispatch"}
                            </Text>
                            <View >
                                <Image
                                    source={require("../../../assets/images/phoneIcon2.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image}
                                />
                                <Image
                                    source={require("../../../assets/images/policeIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.absoluteImage3}
                                />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"0311-7773997"}
                            </Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.column}></View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["#A83836", "#FA746F"]}
                        style={styles.column3}>
                        <View style={styles.row}>
                            <Text style={styles.text3}>
                                {"QRF"}
                            </Text>
                            <View >
                                <Image

                                    source={require("../../../assets/images/phoneIcon2.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image}
                                />
                                <Image
                                    source={require("../../../assets/images/fireIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.absoluteImage}
                                />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"0333-5679476"}
                            </Text>
                        </View>
                    </LinearGradient>

                    <View style={styles.colum}>
                        <View style={styles.row}>
                            <Text style={styles.text5}>
                                {"Fire Fighting Supervisor"}
                            </Text>
                            <View >
                                <Image
                                    source={require("../../../assets/images/phoneIcon2.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image}
                                />
                                <Image
                                    source={require("../../../assets/images/fireIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.absoluteImage2}
                                />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"0301-2332885"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.column4}>
                        <View style={styles.row}>
                            <Text style={styles.text5}>
                                {"Fire Brigade"}
                            </Text>
                            <View >
                                <Image
                                    source={require("../../../assets/images/phoneIcon2.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image}
                                />
                                <Image
                                    source={require("../../../assets/images/fireIcon.png")}
                                    resizeMode={"stretch"}
                                    style={styles.absoluteImage2}
                                />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.text4}>
                                {"051-3570053"}
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false} style={styles.scrollView2}>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
                        <Text style={styles.text7}>
                            {"All Services"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => alert('Pressed!')}>
                        <Text style={styles.text8}>
                            {"Security"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={() => alert('Pressed!')}>
                        <Text style={styles.text8}>
                            {"Maintenance"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.column6}>
                    <View style={styles.column7}>
                        <View style={styles.row2}>
                            <View style={styles.row3}>
                                <View style={styles.box}>
                                </View>
                                <View style={styles.view4}>
                                    <Text style={styles.text9}>
                                        {"Security and Safety"}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button4} onPress={() => alert('Pressed!')}>
                                <Text style={styles.text10}>
                                    {"24/7 Available"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.column8}>
                            <View style={styles.row4}>
                                <View style={styles.row5}>
                                    <Image
                                        source={require("../../../assets/images/communityGateIcon.png")}
                                        resizeMode={"stretch"}
                                        style={styles.image2}
                                    />
                                    <View style={styles.column9}>
                                        <View style={styles.view5}>
                                            <Text style={styles.text11}>
                                                {"Community Main Gate"}
                                            </Text>
                                        </View>
                                        <View style={styles.view6}>
                                            <Text style={styles.text12}>
                                                {"Updating Soon"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require("../../../assets/images/gatePhone.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image3}
                                />
                            </View>
                            <View style={styles.row6}>
                                <View style={styles.row7}>
                                    <Image
                                        source={require("../../../assets/images/NeighborhoodPatrol.png")}
                                        resizeMode={"stretch"}
                                        style={styles.image2}
                                    />
                                    <View style={styles.column9}>
                                        <View style={styles.view7}>
                                            <Text style={styles.text11}>
                                                {"Neighborhood Patrol"}
                                            </Text>
                                        </View>
                                        <View style={styles.view7}>
                                            <Text style={styles.text12}>
                                                {"Mobile Security Unit"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require("../../../assets/images/gatePhone.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image3}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.column10}>
                        <View style={styles.row8}>
                            <View style={styles.box2}>
                            </View>
                            <View style={styles.view8}>
                                <Text style={styles.text9}>
                                    {"Maintenance & Repairs"}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.column8}>
                            <View style={styles.row9}>
                                <View style={styles.row10}>
                                    <Image
                                        source={require("../../../assets/images/buildingmain.png")}
                                        resizeMode={"stretch"}
                                        style={styles.image2}
                                    />
                                    <View style={styles.column9}>
                                        <View style={styles.view7}>
                                            <Text style={styles.text11}>
                                                {"Building Maintenance"}
                                            </Text>
                                        </View>
                                        <View style={styles.view7}>
                                            <Text style={styles.text12}>
                                                {"0311-7773997"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require("../../../assets/images/gatePhone.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image3}
                                />
                            </View>
                            <View style={styles.row9}>
                                <View style={styles.row11}>
                                    <Image
                                        source={require("../../../assets/images/plumbring.png")}
                                        resizeMode={"stretch"}
                                        style={styles.image2}
                                    />
                                    <View style={styles.column9}>
                                        <View style={styles.view7}>
                                            <Text style={styles.text11}>
                                                {"Emergency Plumbing"}
                                            </Text>
                                        </View>
                                        <View style={styles.view5}>
                                            <Text style={styles.text12}>
                                                {"0311-7773997"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require("../../../assets/images/gatePhone.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image3}
                                />
                            </View>
                            <View style={styles.row12}>
                                <View style={styles.row13}>
                                    <Image
                                        source={require("../../../assets/images/electricity.png")}
                                        resizeMode={"stretch"}
                                        style={styles.image2}
                                    />
                                    <View style={styles.column9}>
                                        <View style={styles.view9}>
                                            <Text style={styles.text11}>
                                                {"Electrical Services"}
                                            </Text>
                                        </View>
                                        <View style={styles.view10}>
                                            <Text style={styles.text12}>
                                                {"Power outages & fault repairs"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Image
                                    source={require("../../../assets/images/gatePhone.png")}
                                    resizeMode={"stretch"}
                                    style={styles.image3}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <HospitalMap />

            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    absoluteImage: {
        position: "absolute",
        top: 15,
        right: 264,
        width: 24,
        height: 27,
    },
    absoluteImage2: {
        position: "absolute",
        top: 15,
        right: 262,
        width: 28,
        height: 30,
    },
    absoluteImage3: {
        position: "absolute",
        top: 15,
        right: 258,
        width: 30,
        height: 30,
    },
    box: {
        width: 7,
        height: 32,
        backgroundColor: "#7C3AED",
        borderRadius: 9999,
        marginRight: 4,
    },
    box2: {
        width: 8,
        height: 32,
        backgroundColor: "#7C3AED",
        borderRadius: 9999,
        marginRight: 12,
    },
    button: {
        backgroundColor: "#F472B64D",
        borderRadius: 6,
        paddingVertical: 14,
        paddingHorizontal: 24,
        marginRight: 12,
    },
    button2: {
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginRight: 12,
    },
    button3: {
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    button4: {
        backgroundColor: "#FACC158F",
        borderRadius: 9999,
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginRight: 4,
    },
    column: {
        marginBottom: 25,
        marginLeft: 24,
    },
    column2: {
        marginBottom: 27,
        marginLeft: 22,
    },
    column3: {
        borderRadius: 20,
        paddingBottom: 16,
        marginBottom: 16,
    },
    column4: {
        backgroundColor: "#7C3AED",
        borderRadius: 20,
        paddingBottom: 16,
        marginBottom: 16,
        shadowColor: "#0000001A",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 6,
        elevation: 6,
    },

    colum: {
        backgroundColor: "#deed3aff",
        borderRadius: 20,
        paddingBottom: 16,
        marginBottom: 16,
        shadowColor: "#0000001A",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 6,
        elevation: 6,

    },

    column5: {
        borderRadius: 20,
        paddingBottom: 16,
    },
    column6: {
        marginBottom: 16,
        marginLeft: 24,
    },
    column7: {
        backgroundColor: "#DFEAFA33",
        borderColor: "#216C8C3B",
        borderRadius: 10,
        borderWidth: 1,
        padding: 4,
        marginBottom: 14,
    },
    column8: {
        paddingBottom: 8,
        paddingHorizontal: 8,
    },
    column9: {
        flex: 1,
    },
    column10: {
        backgroundColor: "#DFEAFA33",
        borderColor: "#216C8C3B",
        borderRadius: 10,
        borderWidth: 1,
        padding: 4,
    },
    column11: {
        backgroundColor: "#FFFFFF",
        borderColor: "#ACB3B626",
        borderRadius: 10,
        borderWidth: 1,
        padding: 25,
        marginLeft: 24,
        shadowColor: "#0000000D",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        borderRadius: 20,
        width: 64,
        height: 54,
        resizeMode: "contain",
        marginRight: 12,
        marginTop: 10,
    },
    image2: {
        width: 48,
        height: 48,
        marginRight: 16,
    },
    image3: {
        borderRadius: 10,
        width: 42,
        height: 42,
    },
    image4: {
        borderRadius: 10,
        height: 164,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
        marginLeft: 24,
    },
    row2: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
    },
    row3: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
    },
    row4: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderColor: "#747C7E4D",
        borderRadius: 10,
        borderWidth: 1,
        padding: 16,
        marginBottom: 11,
    },
    row5: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
    },
    row6: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderColor: "#747C7E4D",
        borderRadius: 10,
        borderWidth: 1,
        padding: 16,
        display: "none",
    },
    row7: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 18,
        // display: "none",
    },
    row8: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingLeft: 20,
        paddingRight: 41,
    },
    row9: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
    },
    row10: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 13,
    },
    row11: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    row12: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 16,
        display: "none",
    },
    row13: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
        paddingTop: 32,
        paddingRight: 24,
    },
    scrollView2: {
        alignSelf: "flex-start",
        flexDirection: "row",
        paddingHorizontal: 24,
        marginBottom: 19,
    },
    text: {
        color: "#2C3436",
        fontSize: 28,
        fontWeight: "bold",
    },
    text2: {
        color: "#596063",
        fontSize: 14,
        width: 260,
    },
    text3: {
        color: "#FFF7F6",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 58,
    },
    text4: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "bold",
    },
    text5: {
        color: "#F8F8FF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 61,
    },
    text6: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 61,
    },
    text7: {
        color: "#A72368",
        fontSize: 14,
    },
    text8: {
        color: "#596063",
        fontSize: 14,
    },
    text9: {
        color: "#2C3436",
        fontSize: 16,
        fontWeight: "bold",
    },
    text10: {
        color: "#876E09",
        fontSize: 11,
        fontWeight: "bold",
    },
    text11: {
        color: "#2C3436",
        fontSize: 14,
    },
    text12: {
        color: "#596063",
        fontSize: 12,
    },
    text13: {
        color: "#2C3436",
        fontSize: 18,
        fontWeight: "bold",
    },
    view: {
        paddingBottom: 1,
        marginBottom: 8,
    },
    view2: {
        paddingBottom: 1,
    },
    view3: {
        marginHorizontal: 24,
    },
    view4: {
        flex: 1,
        paddingVertical: 19,
        paddingLeft: 1,
    },
    view5: {
        paddingVertical: 4,
    },
    view6: {
        paddingVertical: 5,
    },
    view7: {
        paddingVertical: 4,
        paddingLeft: 1,
    },
    view8: {
        flex: 1,
        paddingVertical: 5,
        paddingLeft: 1,
    },
    view9: {
        paddingVertical: 6,
        paddingLeft: 1,
    },
    view10: {
        paddingVertical: 9,
        paddingLeft: 1,
    },
    view11: {
        paddingTop: 2,
        paddingLeft: 1,
        marginBottom: 8,
    },
    view12: {
        backgroundColor: "#E3E9EB",
        borderRadius: 10,
        paddingTop: 8,
    },
});

export default ContactsScreen;