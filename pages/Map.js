
import React, { useState } from "react";
import { View, Text, Alert, Modal, Pressable, StyleSheet } from 'react-native';
import MapComponent from '../components/Map'





const MapPage = () => {
    const [modalEventsVisible, setModalEventsVisible] = useState(false);
    const [modalFiltersVisible, setModalFiltersVisible] = useState(false);





    return (
        <View style={styles.page}>
            <View style={styles.centeredView}>
                <MapComponent />

                {/*Event Modal Btn */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalEventsVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalEventsVisible(!modalEventsVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Create Event</Text>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                {/*Filter Modal Btn */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalFiltersVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalFiltersVisible(!modalFiltersVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Set Filters</Text>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalFiltersVisible(!modalFiltersVisible)}
                            >
                                <Text style={styles.textStyle}>Set Filters</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                {/* Event Btn */}
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalEventsVisible(true)}
                >
                    <Text style={styles.textStyle}>Events</Text>
                </Pressable>

                {/* Event Btn */}
                <Pressable
                    style={[styles.button1, styles.buttonOpen]}
                    onPress={() => setModalFiltersVisible(true)}
                >
                    <Text style={styles.textStyle}>Filters</Text>
                </Pressable>
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 900,
        width: 500,
    },
    map: {
        // position: 'absolute',
        flex: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        top: 0,
        right: 60,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'absolute'

    },
    button1: {
        top: 50,
        right: 60,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'absolute'

    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },


});

export default MapPage;