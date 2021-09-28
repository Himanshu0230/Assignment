import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const passwordValid = (text) => {
        if (text.length < 8) {
            setIsPasswordValid(false);
        } else {
            setIsPasswordValid(true);
        }
    };

    const emailValid = email1 => {
        console.log(email1);
        const expression = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        let e = expression.test(String(email1).toLowerCase());
        console.log(e);
        setIsEmailValid(e);
    };

    const shouldNavigate = () => {
        
        if (email && password &&isEmailValid && isPasswordValid) {
            navigation.navigate('Card')
        }
    };

    return (
        <View>
            <Image style={styles.logoStyle} source={require('../../assets/chanel.jpg')} />
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ position: 'absolute', marginLeft: 26 }} name="email-outline" size={24} />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="user@email.com"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={(newValue) => setEmail(newValue)}
                        onEndEditing={e => emailValid(e.nativeEvent.text)}
                    />
                </View>
                {isEmailValid ? null : <Text style={styles.errorMessage}>Enter Correct Email</Text>}
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ position: 'absolute', marginLeft: 26 }} name="lock-outline" size={24} />
                    <TextInput
                        style={styles.inputStyle}
                        secureTextEntry
                        placeholder="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={password}
                        onChangeText={(newValue) => setPassword(newValue)}
                        onEndEditing={e => passwordValid(e.nativeEvent.text)}
                    />
                </View>
                {isPasswordValid ? null : <Text style={styles.errorMessage}>Password should be more than eight characters</Text>}
            </View>
            <View style={styles.buttonContainerStyle}>
                <TouchableOpacity onPress={shouldNavigate}>
                    <Text style={styles.buttonStyle}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 20,
        // margin: 25,
        borderColor: 'black',
        borderBottomWidth: 2,
        paddingLeft: 32,
        flex: 1,
        marginHorizontal: 25,
        marginVertical: 10
    },
    logoStyle: {
        height: 200,
        width: 200,
        margin: 90,
    },
    buttonContainerStyle: {
        borderColor: 'black',
        borderWidth: 2,
        margin: 25,
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22
    },
    errorMessage: {
        marginLeft: 25,
        color: 'red',
    }
});

export default LoginScreen;