
import React, { useState } from "react";
import { View, Text, Alert, Modal, Pressable, StyleSheet } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken("pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNsOWJlbjJqajFqbTQzcmxtaW1mazNmYjAifQ.THEHjlqYUV3nVSJzSCA-Jw");


const featureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
            properties: {
                icon: 'example',
            },
            geometry: {
                type: 'Point',
                coordinates: [-117.20611157485, 52.180961084261],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
            properties: {
                icon: 'airport-15',
            },
            geometry: {
                type: 'Point',
                coordinates: [-117.205908, 52.180843],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
            properties: {
                icon: 'pin',
            },
            geometry: {
                type: 'Point',
                coordinates: [-117.206562, 52.180797],
            },
        },
        {
            type: 'Feature',
            id: '9d10456e-bdda-4aa9-9269-04c1667d4553',
            properties: {
                icon: 'pin3',
            },
            geometry: {
                type: 'Point',
                coordinates: [-117.206862, 52.180897],
            },
        },
    ],
};


const Map = () => {
    const [markers] = useState([
        {
            title: 'hello',
            coordinates: [105.24065199465605, 16.049580619790696]
        },
        {
            title: 'hello',
            coordinates: [99.24177161264663, 16.051053734988322]
        },
        {
            title: 'hello',
            coordinates: [60.23945068795894, 16.05118303611558]
        },
        {
            title: 'hello',
            coordinates: [20.24056069541828, 16.05149705278938]
        },
        {
            title: 'hello',
            coordinates: [55.24175239173825, 16.051012173893877]
        },
        {
            title: 'hello',
            coordinates: [88.24081537245439, 16.050171714344984]
        }
    ]);

    return (
        <View style={styles.page}>
            <View style={styles.centeredView}>
                {/* //map */}
                <View style={styles.container}>
                    <MapboxGL.MapView style={styles.map} children={true}>
                        <MapboxGL.ShapeSource
                            id="exampleShapeSource"
                            shape={featureCollection}>
                            <MapboxGL.SymbolLayer id="exampleIconName" style={styles.icon} />
                        </MapboxGL.ShapeSource>
                        <MapboxGL.UserLocation
                            renderMode="native"
                            androidRenderMode="compass"
                        />
                        {markers.map((marker) => (
                            <MapboxGL.PointAnnotation coordinate={marker.coordinates} key={marker.coordinates} >
                            </MapboxGL.PointAnnotation >
                        ))}
                    </MapboxGL.MapView>
                </View>
            </View>
        </View>
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