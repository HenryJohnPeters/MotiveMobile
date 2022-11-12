import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    SectionList,
    StyleSheet
} from 'react-native';


const SectionListBasics = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: 'May', data: [{ name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }] },
                    { title: 'January', data: [{ name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }, { name: 'Event Name', date: "October 21st 2022", location: 'Poole' }] },
                ]}
                renderItem={({ item }) =>
                    <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                        <View>
                            <Image
                                resizeMode={'cover'}
                                style={{ width: '100%', height: 150 }}
                                source={{ uri: 'https://images.unsplash.com/photo-1629793926938-b7ed057fb616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' }}
                            />
                            <Text style={styles.itemHeader}>{item.name}</Text>

                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Text style={styles.item}>{item.location}</Text>
                                <Text style={styles.item}>{item.date}</Text>
                            </View>

                            <Text style={styles.itemHeader}>____________________________________________________________________________</Text>
                        </View>
                    </View>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => `basicListEntry-${item.title}`}
            />
        </View>
    );
}

export default SectionListBasics;

const styles = StyleSheet.create({

    container: {
        height: 900,
        width: 500,
    },
    itemHeader: {
        // backgroundColor: 'grey',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        height: 44,
    },
    item: {
        // backgroundColor: 'blue',
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 2
    },
    item2: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 30,
        fontWeight: 'bold',

    },

});