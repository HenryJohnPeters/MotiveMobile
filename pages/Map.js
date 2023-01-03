
import React, { useState, useEffect } from "react";
import { View, Text, Alert, Modal, Pressable, StyleSheet, Dimensions, Switch } from 'react-native';
import MapComponent from '../components/Map/Map'
import { Slider } from '@miblanchard/react-native-slider';


// TODO: extract modals to seperate files

const MapPage = () => {
    const [modalEventsVisible, setModalEventsVisible] = useState(false);
    const [modalFiltersVisible, setModalFiltersVisible] = useState(false);
    const [dateRange, setDateRange] = useState(1);
    const [deviceWidth, setDeviceWidth] = useState(null);

    const SetDateRange = (val) => {
        console.log(val)
        setDateRange(Math.round(val))
    }

    useEffect(() => {
        const currentWidth = Dimensions.get("screen").width;
        setDeviceWidth(currentWidth);
    }, []);

    return (
        <View style={styles.page}>
            <View style={{ width: deviceWidth, ...sliderStyles.container }}>
                <Slider
                    maximumValue={28}
                    value={dateRange}
                    onValueChange={value => SetDateRange(value)}
                />
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Within {dateRange} {dateRange > 1 ? " Days" : "Day"}</Text>
            </View>
            <View style={styles.centeredView}>

                <MapComponent />

                {/*Event Modal*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalEventsVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalEventsVisible(!modalEventsVisible);
                    }}
                >
                    <View style={{ width: deviceWidth, ...styles.centeredView }}>

                        <View style={styles.modalView}>

                            <Pressable
                                style={{ right: 0 }}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={{ right: 0 }}>X</Text>
                            </Pressable>
                            <Text >Create Event</Text>
                            <Pressable
                                style={[styles.eventButtonOption, styles.buttonOpen]}
                                onPress={() => setModalEventsVisible(true)}
                            >
                                <Text style={styles.textStyle}>Free Event</Text>
                            </Pressable>

                            {/* Event Btn */}
                            <Pressable
                                style={[styles.eventButtonOption, styles.buttonOpen]}
                                onPress={() => setModalFiltersVisible(true)}
                            >
                                <Text style={styles.textStyle}>Paid Event</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                {/*Filter Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalFiltersVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalFiltersVisible(!modalFiltersVisible);
                    }}
                >
                    <View style={{ ...styles.centeredView, right: 0, flexDirection: 'row' }}>
                        <View style={styles.modalView}>
                            {/* TODO: style Close Btn */}
                            <Pressable
                                style={{ right: 0 }}
                                onPress={() => setModalFiltersVisible(!modalFiltersVisible)}
                            >
                                <Text style={{ right: 0 }}>X</Text>
                            </Pressable>

                            {/* Modal Header */}
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold", ...styles.modalText }}>Set Filters</Text>



                            <View style={{
                                flexDirection: 'row', flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                textAlign: 'center',
                                elevation: 3,
                                borderRadius: 10,
                                margin: 5,
                                alignself: 'center',
                                width: 400,
                                justifycontent: 'center'
                            }}>


                                <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>Ticket Required</Text>
                                <View style={{ borderRadius: 5, margin: 3, padding: 3, flex: 1, right: 180 }} >

                                    <Switch

                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        ios_backgroundColor="#3e3e3e"
                                    />
                                    {/* <Text style={{ color: 'black', fontWeight: 'bold' }}>Yes</Text> */}
                                </View>
                            </View >

                            <View style={{
                                flexDirection: 'row', flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                textAlign: 'center',
                                elevation: 3,
                                borderRadius: 10,
                                margin: 5,
                                width: 400,
                                alignself: 'center',
                                justifycontent: 'center'
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>Official Host</Text>
                                <View style={{ borderRadius: 5, margin: 3, padding: 3, flex: 1, right: 180 }} >
                                    {/* <Text style={{ color: 'black', fontWeight: 'bold' }}>Official</Text> */}
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        ios_backgroundColor="#3e3e3e"
                                    />
                                </View>
                            </View >






                            {/* Event Type Section */}
                            {/* TODO: Hook Up state */}
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold", ...styles.modalText }}>Event Type</Text>
                            <View style={{
                                flexDirection: 'row', flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                textAlign: 'center',
                                elevation: 3,
                                borderRadius: 10,
                                margin: 5, width: 400,
                                alignself: 'center',
                                justifycontent: 'center',
                                padding: 10,
                            }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', borderRadius: 5, color: 'white', margin: 3, padding: 3 }} >
                                        <Text style={{ fontWeight: 'bold' }}>Social</Text>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            ///  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                        // onValueChange={toggleSwitch}
                                        // value={isEnabled}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderRadius: 5, color: 'white', margin: 3, padding: 3 }} >
                                        <Text style={{ fontWeight: 'bold' }}>Entertaiment</Text>
                                        <Switch

                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            ///  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                        // onValueChange={toggleSwitch}
                                        // value={isEnabled}
                                        />
                                    </View>

                                    <View style={{ flexDirection: 'row', borderRadius: 5, color: 'white', margin: 3, padding: 3 }} >
                                        <Text style={{ fontWeight: 'bold' }}>Sport</Text>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            ///  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                        // onValueChange={toggleSwitch}
                                        // value={isEnabled}
                                        />
                                    </View>
                                </View >
                            </View>

                            <View style={{
                                flexDirection: 'row', flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                textAlign: 'center',
                                elevation: 3,
                                borderRadius: 10,
                                margin: 5, width: 400,
                                alignself: 'center',
                                justifycontent: 'center',
                                padding: 10
                            }}>
                                <View style={{ flexDirection: 'row', borderRadius: 5, color: 'white', margin: 3, padding: 3 }} >
                                    <Text style={{ fontWeight: 'bold' }}>Social</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        ///  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                    // onValueChange={toggleSwitch}
                                    // value={isEnabled}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', borderRadius: 5, color: 'white', margin: 3, padding: 3 }} >
                                    <Text style={{ fontWeight: 'bold' }}>Entertaiment</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        ///  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                    // onValueChange={toggleSwitch}
                                    // value={isEnabled}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', borderRadius: 5, color: 'white', margin: 3, padding: 3 }} >
                                    <Text style={{ fontWeight: 'bold' }}>Sport</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        ///  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                    // onValueChange={toggleSwitch}
                                    // value={isEnabled}
                                    />
                                </View>
                            </View >













                        </View>


                    </View>
                </Modal>

                {/* Event Btn */}
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalEventsVisible(true)}
                >
                    <Text style={styles.textStyle}>Create Event +</Text>
                </Pressable>

                {/* Event Btn */}
                <Pressable
                    style={[styles.button1, styles.buttonOpen]}
                    onPress={() => setModalFiltersVisible(true)}
                >
                    <Text style={styles.textStyle}>Filters</Text>
                </Pressable>
            </View >
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
        color: '#00FFFF',

        right: 60,
        bottom: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'absolute'

    },

    eventButtonOption: {
        color: '#00FFFF',
        margin: 10,
        //right: 60,
        //bottom: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        // position: 'absolute'

    },
    // TODO: get top property dynamically or might be weird on some phones
    button1: {
        top: 80,
        right: 60,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'absolute'

    },
    buttonOpen: {
        backgroundColor: "black",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },


    modalOption: {


        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    modalOptionTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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





const sliderStyles = StyleSheet.create({
    container: {
        margin: 3,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10000,
        // maxWidth: '80%',   // <-- Max width is 80%
        // minHeight: '80%',
        top: 0,
        //margin: 1,
        padding: 10
    },
});

export default MapPage;