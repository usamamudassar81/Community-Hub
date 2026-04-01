import React, { useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderTopAppBar from "../../components/header";
const OfficialUpdatesScreen = () => {
    const [activeTab, setActiveTab] = useState("All Announcements");
    const tabs = ["All Announcements", "Maintenance", "Safety", "Social Events", "Utilities"];

    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderTopAppBar
                logo={require("../../../assets/images/Hublogo.png")}
                profileImage={require("../../../assets/images/profile.png")}
                onProfilePress={() => console.log("Profile pressed")}
            />
            <ScrollView style={styles.scrollView}>


                <View style={styles.column}>
                    <View style={styles.column2}>
                        <View style={styles.view}>
                            <Text style={styles.text}>
                                {"Official Updates"}
                            </Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={styles.text2}>
                                {"Stay informed with the latest community\nannouncements, maintenance schedules, and essential safety notices from your Resident Sanctuary team."}
                            </Text>
                        </View>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.row2}
                        style={styles.tabScrollView}
                    >
                        {tabs.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={activeTab === tab ? styles.button : styles.button2}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={activeTab === tab ? styles.text3 : styles.text4}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={styles.column3}>
                        {/* CATEGORY: Maintenance */}
                        {(activeTab === "All Announcements" || activeTab === "Maintenance") && (
                            <>
                                {/* Card: Scheduled Water Main */}
                                <View style={styles.column5}>
                                    <View style={styles.column6}>
                                        <View style={styles.row3}>
                                            <TouchableOpacity style={styles.button3} onPress={() => alert('Pressed!')}>
                                                <Text style={styles.text6}>{"High Urgency"}</Text>
                                            </TouchableOpacity>
                                            <View style={styles.view4}>
                                                <Text style={styles.text7}>{"October 24, 2023"}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.column7}>
                                            <Text style={styles.text8}>{"Scheduled Water \nMain Maintenance:\nNorth Sector"}</Text>
                                            <Text style={styles.text9}>{"Please be advised that water services will be temporarily suspended for the entire North Sector this coming Sunday between \n8:00 AM & 4:00PM to facilitate urgent pipe upgrades."}</Text>
                                            <View style={styles.row4}>
                                                <Text style={styles.text10}>{"View detailed schedule"}</Text>
                                                <Image source={require("../../../assets/images/rightMoveicon.png")} resizeMode={"stretch"} style={styles.image3} />
                                            </View>
                                        </View>
                                    </View>
                                    <Image source={require("../../../assets/images/detailedSchedual.png")} resizeMode={"stretch"} style={styles.image4} />
                                </View>

                                {/* Card: Main Lobby Renovation */}
                                <View style={styles.column10}>
                                    <View style={styles.box}>
                                        <Image source={require("../../../assets/images/Upgrade.png")} resizeMode={"stretch"} style={styles.image16} />
                                    </View>
                                    <View style={styles.column11}>
                                        <View style={styles.row8}>
                                            <TouchableOpacity style={styles.button6} onPress={() => alert('Pressed!')}>
                                                <Text style={styles.text11}>{"Planned"}</Text>
                                            </TouchableOpacity>
                                            <View style={styles.view10}>
                                                <Text style={styles.text15}>{"Phase 1: Starting Nov 1"}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.view11}>
                                            <Text style={styles.text16}>{"Main Lobby Renovation\nProject"}</Text>
                                        </View>
                                        <View style={styles.view12}>
                                            <Text style={styles.text17}>{"We're enhancing the entrance\nexperience with new sustainable\nlighting and ergonomic seating\nareas. Access will be redirected to\nthe side entrance."}</Text>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )}

                        {/* CATEGORY: Social Events */}
                        {(activeTab === "All Announcements" || activeTab === "Social Events") && (
                            <View style={styles.column8}>
                                <View style={styles.row5}>
                                    <TouchableOpacity style={styles.button4} onPress={() => alert('Pressed!')}>
                                        <Text style={styles.text11}>{"Info"}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.view5}>
                                        <Text style={styles.text12}>{"2 days ago"}</Text>
                                    </View>
                                </View>
                                <View style={styles.view6}>
                                    <Text style={styles.text13}>{"Annual Garden Festival Details"}</Text>
                                </View>
                                <View style={styles.view7}>
                                    <Text style={styles.text2}>{"Registration for the autumn plant swap is\nnow open. Join your neighbors for a morning of exchange and community growth."}</Text>
                                </View>
                                <View style={styles.row6}>
                                    <Image source={require("../../../assets/images/plantIcon.png")} resizeMode={"stretch"} style={styles.image5} />
                                    <Image source={require("../../../assets/images/plantArrow.png")} resizeMode={"stretch"} style={styles.image6} />
                                </View>
                            </View>
                        )}

                        {/* CATEGORY: Safety */}
                        {(activeTab === "All Announcements" || activeTab === "Safety") && (
                            <>
                                {/* Card: Parking Policy */}
                                <View style={[styles.column9, { marginTop: 16 }]}>
                                    <View style={styles.row7}>
                                        <TouchableOpacity style={styles.button5} onPress={() => alert('Pressed!')}>
                                            <Text style={styles.text14}>{"General"}</Text>
                                        </TouchableOpacity>
                                        <View style={styles.view4}>
                                            <Text style={styles.text15}>{"Oct 20"}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.view8}>
                                        <Text style={styles.text13}>{"New Visitor Parking Policy"}</Text>
                                    </View>
                                    <View style={styles.view9}>
                                        <Text style={styles.text2}>{"Digital permits are now mandatory for\novernight guests. Please update your\nregistration in the portal."}</Text>
                                    </View>
                                    <Image source={require("../../../assets/images/parking.png")} resizeMode={"stretch"} style={styles.image7} />
                                </View>

                                {/* Card: Elevator Inspection (Joint category: Maintenance/Safety) */}
                                <View style={[styles.column12, { marginTop: 16 }]}>
                                    <View style={styles.row9}>
                                        <TouchableOpacity style={styles.button7} onPress={() => alert('Pressed!')}>
                                            <Text style={styles.text18}>{"Urgent"}</Text>
                                        </TouchableOpacity>
                                        {/* <Image source={require("../../../assets/images/Upgrade.png")} resizeMode={"stretch"} style={styles.image8} /> */}
                                    </View>
                                    <View style={styles.view13}>
                                        <Text style={styles.text13}>{"Elevator B Inspection"}</Text>
                                    </View>
                                    <View style={styles.view14}>
                                        <Text style={styles.text19}>{"Temporarily offline for bi-annual safety\ncertification. Estimated completion: Today,\n5:00 PM."}</Text>
                                    </View>
                                    <View style={styles.row10}>
                                        <Image source={require("../../../assets/images/inProgress.png")} resizeMode={"stretch"} style={styles.image9} />
                                        <View style={styles.view15}>
                                            <Text style={styles.text7}>{"In Progress"}</Text>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )}

                        {/* CATEGORY: Utilities */}
                        {(activeTab === "All Announcements" || activeTab === "Utilities") && (
                            <View style={[styles.column13, { marginTop: 16 }]}>
                                <View style={styles.row11}>
                                    <Image source={require("../../../assets/images/packageRoom.png")} resizeMode={"stretch"} style={styles.image10} />
                                    <View style={styles.column14}>
                                        <View style={styles.view16}>
                                            <Text style={styles.text13}>{"Package Room Updates"}</Text>
                                        </View>
                                        <View style={styles.view17}>
                                            <Text style={styles.text15}>{"Extended hours for the holiday season\nstarting next Monday."}</Text>
                                        </View>
                                        <View style={styles.view18}>
                                            <Text style={styles.text12}>{"Oct 18"}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.row12}>
                                    <Image source={require("../../../assets/images/eWaste.png")} resizeMode={"stretch"} style={styles.image11} />
                                    <View style={styles.column15}>
                                        <View style={styles.view19}>
                                            <Text style={styles.text13}>{"E-Waste Collection"}</Text>
                                        </View>
                                        <View style={styles.view20}>
                                            <Text style={styles.text15}>{"Monthly electronic waste pick-up\nscheduled for this Friday in the south\nbay."}</Text>
                                        </View>
                                        <View style={styles.view21}>
                                            <Text style={styles.text12}>{"Oct 17"}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
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
    tabScrollView: {
        marginBottom: 20,
    },
    box: {
        height: 192,
        backgroundColor: "#33609B1A",
        // marginRight: 82,
    },
    box2: {
        width: 78,
        height: 24,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#7C3AED",
        borderRadius: 9999,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        shadowColor: "#7C3AED",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#F472B61A",
        borderRadius: 9999,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    button3: {
        backgroundColor: "#A83836",
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 17,
    },
    button4: {
        backgroundColor: "#F472B64D",
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 12,
    },
    button5: {
        backgroundColor: "#E3E9EB",
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 12,
        marginRight: 8,
    },
    button6: {
        backgroundColor: "#F472B64D",
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 12,
        marginRight: 12,
    },
    button7: {
        backgroundColor: "#A838361A",
        borderRadius: 9999,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    column: {
        paddingBottom: 9,
        marginBottom: 21,
        marginLeft: 20,
    },
    column2: {
        marginBottom: 24,
        marginRight: 15,
    },
    column3: {
        marginRight: 12,
    },
    column4: {
        marginBottom: 16,
    },
    column5: {
        backgroundColor: "#FFFFFF",
        borderColor: "#216B8B3B",
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 30,
        marginBottom: 16,
    },
    column6: {
        marginBottom: 32,
        marginHorizontal: 13,
    },
    column7: {
        paddingTop: 15,
        paddingRight: 20,
    },
    column8: {
        backgroundColor: "#F0F4F6",
        borderColor: "#ACB3B61A",
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 25,
        paddingBottom: 9,
        paddingHorizontal: 25,
    },
    column9: {
        backgroundColor: "#FFFFFF",
        borderColor: "#216C8C3B",
        borderRadius: 10,
        borderWidth: 1,
        padding: 25,
    },
    column10: {
        backgroundColor: "#FFFFFF",
        borderColor: "#ACB3B626",
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 1,
        paddingHorizontal: 1,
    },
    column11: {
        borderRadius: 10,
        paddingVertical: 32,
    },
    column12: {
        backgroundColor: "#F0F4F6",
        borderColor: "#ACB3B626",
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 25,
        paddingRight: 25,
    },
    column13: {
        marginHorizontal: 8,
    },
    column14: {
        flex: 1,
    },
    column15: {
        flex: 1,
        marginRight: 37,
    },
    column16: {
        alignItems: "center",
        padding: 8,
        marginRight: 26,
    },
    column17: {
        flex: 1,
        alignItems: "center",
        borderRadius: 9999,
        paddingVertical: 8,
        marginRight: 26,
    },
    column18: {
        alignItems: "center",
        padding: 8,
    },
    image: {
        width: 192,
        height: 44,
        marginLeft: 49,
    },
    image2: {
        width: 40,
        height: 40,
        marginRight: 24,
    },
    image3: {
        width: 9,
        height: 9,
    },
    image4: {
        borderRadius: 10,
        height: 192,
        marginHorizontal: 33,
    },
    image5: {
        width: 18,
        height: 20,
    },
    image6: {
        width: 28,
        height: 28,
    },
    image7: {
        borderRadius: 10,
        height: 35,
    },
    image8: {
        width: 20,
        height: 20,
    },
    image9: {
        borderRadius: 32,
        width: 20,
        height: 20,
        marginHorizontal: 12,
    },
    image10: {
        borderRadius: 10,
        width: 44,
        height: 40,
        marginRight: 16,
    },
    image11: {
        borderRadius: 10,
        width: 40,
        height: 40,
        marginLeft: 25,
        marginRight: 16,
    },
    image12: {
        width: 16,
        height: 18,
    },
    image13: {
        width: 16,
        height: 20,
    },
    image14: {
        borderRadius: 9999,
        width: 24,
        height: 18,
    },
    image15: {
        width: 16,
        height: 4,
    },
    image16: {
        width: "100%",

        // height: 86,
        resizeMode: "stretch",
        paddingRight: 82,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F8FAFB",
        paddingVertical: 16,
        marginBottom: 13,
    },
    row2: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        marginHorizontal: 3,
    },
    row3: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 1,
        marginBottom: 16,
    },
    row4: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    row5: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 19,
    },
    row6: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    row7: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    row8: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        marginLeft: 32,
        marginRight: 4,
    },
    row9: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
        marginLeft: 25,
    },
    row10: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF66",
        borderRadius: 32,
        paddingVertical: 12,
        marginLeft: 25,
    },
    row11: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderColor: "#216C8C3B",
        borderRadius: 10,
        borderWidth: 1,
        padding: 25,
        marginBottom: 12,
    },
    row12: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderColor: "#216C8C3B",
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 25,
    },
    row13: {
        flexDirection: "row",
        backgroundColor: "#FFFFFFCC",
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        paddingTop: 13,
        paddingBottom: 24,
        paddingHorizontal: 28,
        shadowColor: "#2C34360D",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 40,
        elevation: 40,
    },
    scrollView: {
        flex: 1,
        marginTop: 20,
    },
    text: {
        color: "#2C3436",
        fontSize: 28,
        fontWeight: "bold",
    },
    text2: {
        color: "#596063",
        fontSize: 14,
    },
    text3: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    text4: {
        color: "#7C3AED",
        fontSize: 12,
        fontWeight: "bold",
    },
    text5: {
        color: "#F472B6",
        fontSize: 14,
        fontWeight: "bold",
    },
    text6: {
        color: "#FFF7F6",
        fontSize: 12,
        fontWeight: "bold",
    },
    text7: {
        color: "#7C3AED",
        fontSize: 14,
    },
    text8: {
        color: "#7C3AED",
        marginBottom: 27,
        marginLeft: 1,
    },
    text9: {
        color: "#596063",
        fontSize: 14,
        marginBottom: 18,
    },
    text10: {
        color: "#876E09",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 8,
    },
    text11: {
        color: "#A72368",
        fontSize: 12,
        fontWeight: "bold",
    },
    text12: {
        color: "#7C3AED",
        fontSize: 12,
    },
    text13: {
        color: "#2C3436",
        fontSize: 16,
        fontWeight: "bold",
    },
    text14: {
        color: "#596063",
        fontSize: 10,
        fontWeight: "bold",
    },
    text15: {
        color: "#596063",
        fontSize: 12,
    },
    text16: {
        color: "#2C3436",
        fontSize: 24,
        fontWeight: "bold",
    },
    text17: {
        color: "#596063",
        fontSize: 14,
        width: 237,
    },
    text18: {
        color: "#A83836",
        fontSize: 12,
        fontWeight: "bold",
    },
    text19: {
        color: "#596063",
        fontSize: 12,
        width: 252,
    },
    view: {
        paddingBottom: 1,
        marginBottom: 7,
    },
    view2: {
        paddingBottom: 1,
        paddingRight: 31,
    },
    view3: {
        backgroundColor: "#F472B626",
        borderRadius: 9999,
        paddingVertical: 13,
        paddingLeft: 25,
    },
    view4: {
        paddingVertical: 3,
        paddingHorizontal: 1,
    },
    view5: {
        paddingVertical: 2,
        paddingHorizontal: 1,
    },
    view6: {
        alignSelf: "flex-start",
        marginBottom: 16,
    },
    view7: {
        marginBottom: 30,
        marginRight: 21,
    },
    view8: {
        paddingBottom: 1,
        marginBottom: 16,
    },
    view9: {
        paddingBottom: 1,
        paddingRight: 42,
        marginBottom: 16,
    },
    view10: {
        paddingVertical: 1,
        paddingRight: 12,
        marginRight: 12,
    },
    view11: {
        paddingBottom: 1,
        paddingRight: 11,
        marginBottom: 12,
        marginHorizontal: 32,
    },
    view12: {
        paddingBottom: 1,
        marginHorizontal: 32,
    },
    view13: {
        alignSelf: "flex-start",
        marginBottom: 13,
        marginLeft: 26,
    },
    view14: {
        alignSelf: "flex-start",
        marginBottom: 21,
        marginLeft: 25,
    },
    view15: {
        paddingTop: 3,
        paddingHorizontal: 1,
    },
    view16: {
        paddingVertical: 3,
        paddingLeft: 1,
        marginBottom: 4,
    },
    view17: {
        paddingTop: 1,
        marginBottom: 4,
    },
    view18: {
        paddingVertical: 4,
    },
    view19: {
        paddingVertical: 5,
        paddingLeft: 2,
        marginBottom: 4,
    },
    view20: {
        paddingHorizontal: 1,
        marginBottom: 4,
    },
    view21: {
        paddingVertical: 5,
        paddingLeft: 1,
    },
    view22: {
        paddingVertical: 4,
        paddingHorizontal: 1,
    },
    view23: {
        paddingVertical: 4,
        marginHorizontal: 20,
    },
});
export default OfficialUpdatesScreen;