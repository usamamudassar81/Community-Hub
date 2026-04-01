import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from 'expo-splash-screen';

const TabLayout = () => {
    useEffect(() => {
        SplashScreen.hideAsync().catch(() => { });
    }, []);

    return (
        <Tabs>
            <Tabs.Screen name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={20} name="home" color={color} />
                    ),
                }} />
            <Tabs.Screen name="waterTiming"
                options={{
                    headerShown: false,
                    title: "Water Timing",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={20} name="tint" color={color} />
                    ),
                }} />
            <Tabs.Screen name="shuttleService"
                options={{
                    headerShown: false,
                    title: "Shuttle Service",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={20} name="bus" color={color} />
                    ),
                }} />
            <Tabs.Screen name="more"
                options={{
                    headerShown: false,
                    title: "More",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={20} name="ellipsis-h" color={color} />
                    ),
                }} />
            <Tabs.Screen name="contacts"
                options={{
                    href: null,
                    headerShown: false,
                }} />
            <Tabs.Screen name="officialUpdates"
                options={{
                    href: null,
                    headerShown: false,
                }} />
            <Tabs.Screen name="gymTiming"
                options={{
                    href: null,
                    headerShown: false,
                }} />
        </Tabs>
    )
}

export default TabLayout;