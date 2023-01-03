
import React, { useState, useEffect } from "react";
import { View, Text, Alert, Modal, Pressable, StyleSheet } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setWellKnownTileServer('Mapbox');

// TODO: set as env var
MapboxGL.setAccessToken("pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNsOWJlbjJqajFqbTQzcmxtaW1mazNmYjAifQ.THEHjlqYUV3nVSJzSCA-Jw");

const Map = () => {

    const [markers, setMarkers] = useState([]);
    const [userLocation, setUserLocation] = useState(null)

    const GetMarkers = (userLocation) => {
        // Todo: Need to fetch these from api using userLocation
        console.log("Getting Markers:")
        setMarkers([
            {
                title: 'hello',
                coordinates: [105.24065199465605, 16.049580619790696]
            },
            {
                title: 'hello',
                coordinates: [-0.11292, 51.609865]
            },
            {
                title: 'hello',
                coordinates: [-0.828192, 51.551865]
            },
            {
                title: 'hello',
                coordinates: [-1.114092, 51.655865]
            },
            {
                title: 'hello',
                coordinates: [-0.618092, 51.609865]
            },
            {
                title: 'hello',
                coordinates: [-0.418092, 51.509865]
            }
        ])
    }
    const GetUserLocation = () => {
        {/* TODO: Need to get center coordinate dynamically */ }
        setUserLocation([-0.118092, 51.509865]);
    }

    useEffect(() => {
        GetUserLocation();
        GetMarkers(userLocation);
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <MapboxGL.MapView style={styles.map} zoomEnabled={true} children={true}>
                        {/* TODO: Need to get center coordinate dynamically */}
                        <MapboxGL.Camera zoomLevel={8} centerCoordinate={userLocation} >
                        </ MapboxGL.Camera >
                        {markers.map((marker) => (
                            <MapboxGL.PointAnnotation coordinate={marker.coordinates} key={marker.coordinates} >
                            </MapboxGL.PointAnnotation >
                        ))}
                    </MapboxGL.MapView>
                </View>
            </View>
        </View >
    );
}

// TODO: Clean up style some are not needed
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
    circle: {
        circleRadius: [
            'interpolate',
            ['linear'],
            ['zoom'],
            15, ['*', ['get', 'geoAccuracy'], 1.5],
            16, ['*', ['get', 'geoAccuracy'], 2],
            17, ['*', ['get', 'geoAccuracy'], 3],
            18, ['*', ['get', 'geoAccuracy'], 5],
            19, ['*', ['get', 'geoAccuracy'], 10],
            20, ['*', ['get', 'geoAccuracy'], 15],
            21, ['*', ['get', 'geoAccuracy'], 30],
            22, ['*', ['get', 'geoAccuracy'], 55],
        ]
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
    icon: {
        iconImage: ['get', 'icon'],

        iconSize: [
            'match',
            ['get', 'icon'],
            'example',
            1.2,
            'airport-15',
            1.2,
          /* default */ 1,
        ],
    },


});

export default Map;