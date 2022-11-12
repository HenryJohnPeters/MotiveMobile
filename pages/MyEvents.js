
import React, { useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import SectionListBasics from "../components/UI/Lists/SectionList";


const MyEvents = ({ navigation }) => {
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <SectionListBasics />
        </SafeAreaView >

    );
};

export default MyEvents;