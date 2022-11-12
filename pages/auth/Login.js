
import React, { Component } from 'react';
import {
    StyleSheet
    , Text
    , View
    , TouchableOpacity,
    TextInput, Image

} from 'react-native';

export default class Login extends Component {


    saveData = async () => {

    }
    showData = async () => {
        let loginDetails = await AsyncStorage.getItem('Login Details Are'); let ld = JSON.parse(loginDetails);
        alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
    }
    // }
    render() {
        return (
            <View style={styles1.container}>
                <Image
                    resizeMode={'cover'}
                    style={{ width: '100%', height: 350 }}
                    source={require('../../logo.png')}
                />

                <View style={styles.container}>
                    <TextInput style={styles.inputBox} onChangeText={(email) => this.setState({ email })} underlineColorAndroid='rgba(0,0,0,0)' placeholder="User ID"
                        placeholderTextColor="#850c22" selectionColor="#fff" keyboardType="email-address"
                        onSubmitEditing={() => this.password.focus()} />
                    <TextInput style={styles.inputBox} onChangeText={(password) => this.setState({ password })} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
                        secureTextEntry={true}
                        placeholderTextColor="#850c22" ref={(input) => this.password = input}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles1.signupTextCont}>
                    <Text style={styles1.signupText}>Not a User? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles1.signupButton}>Register here</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "black", backgroundColor: 'black',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    inputBox: {
        width: 299, backgroundColor: '#ede8e8', borderRadius: 24,
        paddingHorizontal: 15,
        fontSize: 15,
        color: '#991172',
        marginVertical: 9
    },
    button: {
        width: 299,
        backgroundColor: '#b8236b', borderRadius: 24,
        marginVertical: 9,
        paddingVertical: 11
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500', color: '#ffffff', textAlign: 'center'
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
        color: '#bd157a', fontSize: 15,
    },
    signupButton: {
        color: '#700d49', fontSize: 15,
        fontWeight: '500',
    }
});

