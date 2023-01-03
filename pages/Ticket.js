import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    SectionList,
    StyleSheet, Pressable
} from 'react-native';



const Ticket = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }}>Social</Text>

        </View >
    );
}

export default Ticket;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        alignself: 'center', justifycontent: 'center',
    },

});