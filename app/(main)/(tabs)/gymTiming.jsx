import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import HeaderTopAppBar from "../../components/header";
const GymSchedule = () => {
    const getWeekDates = () => {
        const today = new Date();
        const weekDates = [];
        const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        // Get Monday of current week

        const monday = new Date(today);
        const day = today.getDay();
        const diff = today.getDate() - day + (day === 0 ? -6 : 1);
        monday.setDate(diff);

        for (let i = 0; i < 7; i++) {
            const d = new Date(monday);
            d.setDate(monday.getDate() + i);
            weekDates.push({
                day: dayNames[d.getDay()],
                date: d.getDate(),
                isToday: d.toDateString() === new Date().toDateString()
            });
        }
        return weekDates;
    };

    const weekDates = getWeekDates();

    return (
        <ScrollView style={styles.container}>
            <View>
                <HeaderTopAppBar
                    logo={require("../../../assets/images/Hublogo.png")}
                    profileImage={require("../../../assets/images/profile.png")}
                    onProfilePress={() => console.log("Profile pressed")}
                />

            </View>

            {/* Header */}
            <Text style={styles.header}>GYM</Text>
            <Text style={styles.subHeader}>SCHEDULE</Text>
            <Text style={styles.description}>
                Optimized training blocks designed for peak performance and recovery.
            </Text>

            {/* Dates Row - Horizontal Slider */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.dateRow}
                style={styles.dateSlider}
            >
                {weekDates.map((item, index) => (
                    <View key={index} style={[styles.dateBox, item.isToday && styles.activeDate]}>
                        <Text style={styles.day}>{item.day}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Male Morning */}
            <View style={styles.card}>
                <Text style={styles.tag}>PEAK PERFORMANCE</Text>
                <Text style={styles.title}>♂ Male Morning</Text>
                <Text style={styles.time}>10:00 AM – 12:00 PM</Text>
                <TouchableOpacity style={styles.button} onPress={() => alert('Coming Soon!')}>
                    <Text style={styles.buttonText}>JOIN NOW</Text>
                </TouchableOpacity>
            </View>

            {/* Female Evening */}
            <View style={styles.card}>
                <Text style={styles.tag}>COMMUNITY ENERGY</Text>
                <Text style={styles.title}>♀ Female Evening</Text>
                <Text style={styles.time}>05:00 PM – 07:00 PM</Text>
                <TouchableOpacity style={[styles.button, styles.secondaryBtn]} onPress={() => alert('Coming Soon!')}>
                    <Text style={styles.buttonText}>BOOK SLOT</Text>
                </TouchableOpacity>
            </View>

            {/* Male Night */}
            <View style={styles.cardDisabled}>
                <Text style={styles.tag}>ELITE RECOVERY</Text>
                <Text style={styles.title}>♂ Male Night</Text>
                <Text style={styles.time}>07:00 PM – 09:00 PM</Text>
                <View style={styles.soldOut} onPress={() => alert('Coming Soon!')}>
                    <Text style={styles.soldOutText} onPress={() => alert('Coming Soon!')}>SOLD OUT</Text>
                </View>
            </View>

            {/* Banner */}
            <View style={styles.banner}>
                <Text style={styles.bannerText}>AFTER HOURS ELITE</Text>
                <Text style={styles.bannerSub}>EXCLUSIVE SESSION</Text>
            </View>



        </ScrollView>
    );
};

export default GymSchedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingRight: 16,
        paddingLeft: 16,
    },
    header: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        // paddingTop: 20,
    },
    subHeader: {
        color: "#000000ff",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
        marginTop: -10,
    },
    description: {
        color: "#000000ff",
        textAlign: "center",
        marginBottom: 20,
    },

    dateSlider: {
        marginBottom: 25,
    },
    dateRow: {
        flexDirection: "row",
    },
    dateBox: {
        backgroundColor: "#ede3e3ff",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        width: 70,
        marginRight: 12,
    },
    activeDate: {
        backgroundColor: "#6C4CF1",
        color: "#ffffffff",
    },
    day: {
        color: "#000000ff",
        fontSize: 12,
    },
    date: {
        color: "#000000ff",
        fontSize: 18,
        fontWeight: "bold",
    },

    card: {
        backgroundColor: "#e6e6e6ff",
        padding: 16,
        borderRadius: 15,
        marginBottom: 15,
    },
    cardDisabled: {
        backgroundColor: "#e6e6e6ff",
        padding: 16,
        borderRadius: 15,
        marginBottom: 15,
        // opacity: 0.6,
    },

    tag: {
        color: "#6C4CF1",
        fontSize: 12,
        marginBottom: 5,
    },
    title: {
        color: "#000000ff",
        fontSize: 18,
        fontWeight: "bold",
    },
    time: {
        color: "#000000ff",
        marginBottom: 10,
    },

    button: {
        backgroundColor: "#6C4CF1",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
    },
    secondaryBtn: {
        backgroundColor: "#bca1f7ff",
    },
    buttonText: {
        color: "#ffffffff",
        fontWeight: "bold",
    },

    soldOut: {
        marginTop: 10,
        backgroundColor: "#6C4CF1",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
    },
    soldOutText: {
        color: "#ffffffff",
    },

    banner: {
        backgroundColor: "#222",
        padding: 20,
        borderRadius: 15,
        marginTop: 10,
        alignItems: "center",
    },
    bannerText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    bannerSub: {
        color: "#6C4CF1",
    },

    info: {
        color: "#888",
        marginTop: 15,
        textAlign: "center",
    },
});