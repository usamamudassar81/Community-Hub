import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import HeaderTopAppBar from "../../components/header";
const MoreScreen = () => {
    const router = useRouter();

    const sections = [
        { title: 'Contacts', icon: 'address-book', route: '/(main)/(tabs)/contacts' },
        { title: 'GYM Timing', icon: 'address-book', route: '/(main)/(tabs)/gymTiming' },
        { title: 'Official Updates', icon: 'bullhorn', route: '/(main)/(tabs)/officialUpdates' },
        // { title: 'Settings', icon: 'cog', route: null },
        { title: 'Help & Support', icon: 'question-circle', route: '/(main)/(tabs)/help' }
    ];

    const handlePress = (route) => {
        if (route) {
            router.push(route);
        } else {
            alert('Feature coming soon!');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <HeaderTopAppBar
                logo={require("../../../assets/images/Hublogo.png")}
                profileImage={require("../../../assets/images/profile.png")}
                onProfilePress={() => console.log("Profile pressed")}
            />
            <View style={styles.header}>
                {/* <Text style={styles.headerTitle}>Click to Explore</Text> */}
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                {sections.map((section, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        activeOpacity={0.8}
                        onPress={() => handlePress(section.route)}
                    >
                        <View style={styles.cardHeader}>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={section.icon} size={24} color="#A72368" />
                            </View>
                            <Text style={styles.cardTitle}>{section.title}</Text>
                        </View>
                        <FontAwesome name="chevron-right" size={16} color="#A0AEC0" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8FAFB',
        paddingTop: -40,
    },
    header: {
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: '#F8FAFB',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    container: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#0000001A",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 10,
        elevation: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#F7D1E6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4A5568',
    }
});

export default MoreScreen;
