
import React, { useState } from "react";
//import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  StyleSheet, View, Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground,
  Text,
  useColorScheme,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert, Modal, Pressable, SectionList
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapboxGL from '@rnmapbox/maps';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken("pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNsOWJlbjJqajFqbTQzcmxtaW1mazNmYjAifQ.THEHjlqYUV3nVSJzSCA-Jw");
//const Stack = createNativeStackNavigator();


{/* <View style={{}}><Text style={styles.item}>{item}</Text></View> */ }

const Stack = createBottomTabNavigator();

const SectionListBasics = () => {
  // const dimensions = dimensions.get('window');
  // const imageHeight = Math.round(dimensions.width * 9 / 16);
  // const imageWidth = dimensions.width;
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


              {/* <Image
                source={{ uri: 'https://images.unsplash.com/photo-1629793926938-b7ed057fb616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' }}
                style={styles.logo}
              /> */}

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
  const [modalEventsVisible, setModalEventsVisible] = useState(false);
  const [modalFiltersVisible, setModalFiltersVisible] = useState(false);


  const [markers] = useState([
    {
      title: 'hello',
      coordinates: [108.24065199465605, 16.049580619790696]
    },
    {
      title: 'hello',
      coordinates: [108.24177161264663, 16.051053734988322]
    },
    {
      title: 'hello',
      coordinates: [108.23945068795894, 16.05118303611558]
    },
    {
      title: 'hello',
      coordinates: [108.24056069541828, 16.05149705278938]
    },
    {
      title: 'hello',
      coordinates: [108.24175239173825, 16.051012173893877]
    },
    {
      title: 'hello',
      coordinates: [108.24081537245439, 16.050171714344984]
    }
  ]);


  return (
    <View style={styles.page}>

      <View style={styles.centeredView}>
        {/* //map */}
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} children={true}>

            <MapboxGL.UserLocation
              renderMode="native"
              androidRenderMode="compass"
            />

            <MapboxGL.ShapeSource
              id="exampleShapeSource"
              shape={featureCollection}>
              <MapboxGL.SymbolLayer id="exampleIconName" style={styles.icon} />
            </MapboxGL.ShapeSource>


            <MapboxGL.ShapeSource
              id="exampleShapeSource"
              shape={featureCollection}>
              <MapboxGL.SymbolLayer id="exampleIconName" style={styles.icon} />
            </MapboxGL.ShapeSource>


            {/* {markers.map((marker) => (
              <MarkerView coordinate={marker.coordinates} key={key} onPress={() => console.log("pressed")}>

              </MarkerView>
            ))} */}



          </MapboxGL.MapView>
        </View>

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
    </View>
  );
}

const layerStyles = {
  icon: {
    iconAllowOverlap: true,
    iconIgnorePlacement: true,
    iconSize: Platform.OS === 'android' ? 1 : 0.5,
    iconOffset: [0, 5],
    textField: '2%',
    textSize: 14
  },
  iconPremium: {
    textColor: '#fff',
    textHaloColor: '#fff',
    textHaloWidth: 0.3
  },
  iconPremiumSelected: {
    textColor: '#D7B218',
    textHaloColor: '#D7B218',
    textHaloWidth: 0.1
  },
  clusterCount: {
    textField: '0',
    textSize: 18,
    textHaloColor: '#fff',
    textHaloWidth: 0.3,
    textColor: '#fff'
  }
};

// const Section = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };


const HomeScreen = ({ navigation }) => {
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
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
      <SectionListBasics />

      {/* </ScrollView> */}
    </SafeAreaView >

  );
};


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Map}
          options={{ title: 'Motive' }}
        />
        <Stack.Screen name="Settings" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default MyStack;


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




  /////////////////
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
  ////////////////////////
  logo: {
    width: 70,
    height: 70,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#FDD7E4',
    alignSelf: 'stretch',
    textAlign: 'center',
    //padding: 60
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 30,
    fontWeight: 'bold',

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

  }, icon: {
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