
import React, { useState, useEffect } from "react";
import { View, Text, Alert, Modal, Pressable, StyleSheet, Dimensions } from 'react-native';
import MapComponent from '../components/Map/Map'
import { Slider } from '@miblanchard/react-native-slider';

const MapPage = () => {
    const [modalEventsVisible, setModalEventsVisible] = useState(false);
    const [modalFiltersVisible, setModalFiltersVisible] = useState(false);

    const [dateRange, setDateRange] = useState(1);

    const [deviceWidth, setDeviceWidth] = useState(null);

    const SetDateRange = (val) => {
        console.log(val)
        setDateRange(Math.round(val))
    }


    // Similar to componentDidMount and componentDidUpdate:
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
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Create Event</Text>
                            <Text style={styles.modalText}>Creatfwfd dfw  fw  dfwwffwfwfwe Event</Text>



                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
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
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalFiltersVisible(!modalFiltersVisible)}
                            >
                                <Text style={styles.modalOptionTextStyle}>X</Text>
                            </Pressable>
                            <Text style={styles.modalText}>Set Filters</Text>





                            <Text>Social</Text>
                            <Pressable
                                style={[styles.modalOption]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Hide</Text>
                            </Pressable>

                            <Text>Entertaiment</Text>
                            <Pressable
                                style={[styles.modalOption]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Show</Text>
                            </Pressable>


                            <Text>Sports</Text>
                            <Pressable
                                style={[styles.modalOption]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Hide</Text>
                            </Pressable>

                            <Text>Show User Generated</Text>
                            <Pressable
                                style={[styles.modalOption]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Hide</Text>
                            </Pressable>

                            <Text>Show User Generated</Text>
                            <Pressable
                                style={[styles.modalOption]}
                                onPress={() => setModalEventsVisible(!modalEventsVisible)}
                            >
                                <Text style={styles.textStyle}>Hide</Text>
                            </Pressable>






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
        color: '#00FFFF',

        right: 60,
        bottom: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'absolute'

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




class SliderExample extends React.Component {
    state = {
        value: 0.2,
    };

    render() {
        return (
            <View style={sliderStyles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
}

const sliderStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10000,
        // maxWidth: '80%',   // <-- Max width is 80%
        // minHeight: '80%',
        top: 0,
        margin: 1,
        padding: 10
    },
});

export default MapPage;