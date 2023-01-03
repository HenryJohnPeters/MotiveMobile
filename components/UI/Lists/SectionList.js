import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    SectionList,
    StyleSheet, Pressable
} from 'react-native';
import { Dimensions } from "react-native";

import Ticket from '../../../pages/Ticket'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height

const exampleEvents = [
    { title: 'May', data: [{ name: 'BBQ Party', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }] },
    { title: 'January', data: [{ name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }] },
]

const SectionListBasics = (props) => {
    return (



        <View style={styles.container}>
            <SectionList
                sections={exampleEvents}
                renderItem={({ item }) =>
                    <View style={styles.event_container}  >
                        <View>

                            {/* Main Img */}
                            <Image
                                resizeMode={'cover'}
                                style={styles.main_img}
                                source={{ uri: 'https://images.unsplash.com/photo-1629793926938-b7ed057fb616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' }}
                            />

                            {/* Event Desc */}
                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Text style={styles.itemHeader}>{item.name}</Text>
                                <Text style={styles.item}>{item.date}</Text>
                            </View>
                            <View style={[{ flex: 1, flexDirection: 'row', padding: 10 }]}>
                                <Text >Come out and have fun at this bbq its pretty sweet and creati</Text>
                            </View>

                            {/* Event Btns */}
                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => props.navigation.navigate('Ticket'
                                    )
                                    }
                                >
                                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, }}>My Ticket</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => setModalEventsVisible(true)}
                                >
                                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, }}>See More</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => `basicListEntry-${item.title}`}
            />
        </View >
    );
}

export default SectionListBasics;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        alignself: 'center', justifycontent: 'center',
    },
    event_container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        elevation: 3,
        borderRadius: 10,
        margin: 5,
        alignself: 'center', justifycontent: 'center'
    },
    main_img: {
        height: 200, backgroundColor: '#FDD7E4',
        alignSelf: 'stretch',
        textAlign: 'center', borderRadius: 10, margin: 10

    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 20,
        padding: 5,
        elevation: 3,
        margin: 10,
        elevation: 1,
        fontSize: 18,
        flex: 2,
        alignSelf: 'center'
    },
    itemHeader: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    item: {
        textAlign: 'right',
        elevation: 1,
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 2
    },
    sectionHeader: {
        elevation: 3,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 30,
        fontWeight: 'bold',
    },
});