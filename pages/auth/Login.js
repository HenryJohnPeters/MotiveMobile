
import React, { Component } from 'react';
import {
    StyleSheet
    , Text
    , View
    , TouchableOpacity,
    TextInput, Image

} from 'react-native';

export default SectionListBasics = ({ navigation }) => {


    return (
        <View style={styles1.container}>
            <Image
                resizeMode={'cover'}
                style={{ width: '100%', height: 300 }}
                source={require('../../logo.png')}
            />
            <View style={styles.container}>
                <TextInput style={styles.inputBox} onChangeText underlineColorAndroid='rgba(0,0,0,0)' placeholder="User ID"
                    placeholderTextColor="black" selectionColor="#fff" keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()} />
                <TextInput style={styles.inputBox} onChangeText underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor="black" ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles1.signupTextCont}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles1.signupText}>Not a User? </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}><Text style={styles1.signupText}>Forgot Password? </Text></TouchableOpacity>
            </View>

        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "black", backgroundColor: 'black',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    inputBox: {
        width: 299, backgroundColor: 'white', borderRadius: 24,
        paddingHorizontal: 15,
        fontSize: 15,
        color: 'black',
        marginVertical: 9
    },
    button: {
        width: 299,
        backgroundColor: 'white', borderRadius: 24,
        marginVertical: 9,
        paddingVertical: 11
    },
    buttonText: {
        fontSize: 20,

        fontWeight: '500', color: 'black', textAlign: 'center'
    }
});


const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff',
    },
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center', alignItems: 'flex-end', paddingVertical: 15, flexDirection: 'row', backgroundColor: 'black', alignSelf: 'stretch',
    },
    signupText: {

        color: 'white', fontSize: 15,
    },
    signupButton: {
        color: 'white', fontSize: 15,
        fontWeight: '500',
    }
});

