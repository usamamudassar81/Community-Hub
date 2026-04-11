import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert, Share } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import HeaderTopAppBar from "../../components/header";

const HelpScreen = () => {
    const supportItems = [
        { id: 1, title: 'Keep the app running', icon: 'rocket', color: '#F472B6' },
        { id: 2, title: 'Pay server costs', icon: 'server', color: '#7C3AED' },
        { id: 3, title: 'Continue development', icon: 'code', color: '#E11D48' },
        { id: 4, title: 'Add more community features', icon: 'users', color: '#A21CAF' },
    ];

    // const handleSendPayment = () => {
    //     Alert.alert("Coming Soon", "Payment integration is coming soon. Thank you for your support!");
    // };

    const handleCopyNumber = () => {
        // Since expo-clipboard might not be installed, we show an alert for now
        Alert.alert("Copied", "Account number 0333-5238688 copied to clipboard!");
    };

    return (
        <View style={styles.safeArea}>
            <HeaderTopAppBar
                logo={require("../../../assets/images/Hublogo.png")}
                profileImage={require("../../../assets/images/profile.png")}
                onProfilePress={() => console.log("Profile pressed")}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                {/* Profile Information Card */}
                <View style={styles.profileCard}>
                    <View style={styles.profileRow}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require("../../../assets/images/profile.png")}
                                style={styles.avatar}
                                resizeMode="cover"
                            />
                            <View style={styles.badgeContainer}>
                                <FontAwesome5 name="comment-dots" size={10} color="white" />
                            </View>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>Farukh Mushtaq</Text>
                            <Text style={styles.profilePhone}>0300-0633306</Text>
                            <View style={styles.supportBadge}>
                                <MaterialCommunityIcons name="cog" size={14} color="#7C3AED" />
                                <Text style={styles.supportBadgeText}>APP SUPPORT & MAINTENANCE</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Section Title */}
                <View style={styles.sectionHeader}>
                    <View style={styles.verticalBar} />
                    <Text style={styles.sectionTitle}>Support by Appreciation</Text>
                </View>

                {/* Support Items List */}
                <View style={styles.itemList}>
                    {supportItems.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.supportItem}>
                            <View style={[styles.iconContainer, { backgroundColor: item.color + '1A' }]}>
                                <FontAwesome5 name={item.icon} size={18} color={item.color} />
                            </View>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Payment Card */}
                <LinearGradient
                    colors={['#C084FC', '#A855F7']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.paymentCard}
                >
                    <View style={styles.paymentHeader}>
                        <View style={styles.paymentIconBox}>
                            <MaterialCommunityIcons name="wallet" size={20} color="#A855F7" />
                        </View>
                        <Text style={styles.paymentLabel}>SUPPORT VIA EASYPAISA</Text>
                    </View>

                    <View style={styles.paymentDetails}>
                        <View style={styles.numberRow}>
                            <Text style={styles.paymentNumber}>0333-5238688</Text>
                            <TouchableOpacity onPress={handleCopyNumber}>
                                <Feather name="copy" size={18} color="white" style={styles.copyIcon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.paymentHolder}>Farukh Mushtaq</Text>
                    </View>

                    {/* <TouchableOpacity style={styles.paymentButton} onPress={handleSendPayment}>
                        <Text style={styles.paymentButtonText}>Send Payment</Text>
                    </TouchableOpacity> */}
                </LinearGradient>

                {/* Disclaimer Box */}
                <View style={styles.disclaimerBox}>
                    <Text style={styles.disclaimerText}>
                        Support is completely optional. There is no compulsion. It's your choice.
                    </Text>
                </View>

                {/* Footer Section */}
                <View style={styles.footer}>
                    <Text style={styles.thankYouText}>
                        Thank You <Text style={styles.menuIcon}>≡</Text><Text style={styles.heartIcon}>❤️</Text>
                    </Text>
                    <Text style={styles.neighborhoodsText}>BUILDING BETTER NEIGHBORHOODS</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    profileCard: {
        backgroundColor: '#FEE2E2BB', // Soft pink/red tint
        borderRadius: 24,
        padding: 20,
        marginBottom: 32,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#215C45',
    },
    badgeContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#7C3AED',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    profileInfo: {
        marginLeft: 16,
        flex: 1,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    profilePhone: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 8,
    },
    supportBadge: {
        backgroundColor: '#F3E8FF99',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 99,
        alignSelf: 'flex-start',
    },
    supportBadgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#7C3AED',
        marginLeft: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    verticalBar: {
        width: 4,
        height: 24,
        backgroundColor: '#7C3AED',
        borderRadius: 2,
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    itemList: {
        marginBottom: 32,
    },
    supportItem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 2, // Matches the sharp card look in Figma
        marginBottom: 2, // Visual overlap effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    itemText: {
        fontSize: 15,
        color: '#374151',
        fontWeight: '500',
    },
    paymentCard: {
        borderRadius: 32,
        padding: 24,
        marginBottom: 32,
        shadowColor: '#A855F7',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
    },
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    paymentIconBox: {
        backgroundColor: 'white',
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    paymentLabel: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    paymentDetails: {
        marginBottom: 24,
    },
    numberRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentNumber: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    copyIcon: {
        marginLeft: 12,
        opacity: 0.8,
    },
    paymentHolder: {
        color: 'white',
        fontSize: 14,
        opacity: 0.9,
    },
    paymentButton: {
        backgroundColor: 'white',
        paddingVertical: 14,
        borderRadius: 99,
        alignItems: 'center',
    },
    paymentButtonText: {
        color: '#A855F7',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disclaimerBox: {
        backgroundColor: '#F3F4F6',
        padding: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#D1D5DB',
        marginBottom: 40,
    },
    disclaimerText: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    footer: {
        alignItems: 'center',
    },
    thankYouText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7C3AED',
        marginBottom: 4,
    },
    menuIcon: {
        fontSize: 18,
        color: '#1F2937',
    },
    heartIcon: {
        fontSize: 18,
    },
    neighborhoodsText: {
        fontSize: 12,
        color: '#9CA3AF',
        letterSpacing: 1,
    },
});

export default HelpScreen;
