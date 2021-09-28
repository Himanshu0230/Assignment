import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { editTitle } from "../redux";
import { useDispatch } from "react-redux";

const DetailScreen = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    return (
        <View style={{flex:1}}>
            <View style={{marginTop:30}}>
                <Text style={styles.textStyle}>Enter the new title</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter the text here"
                    value={title}
                    onChangeText={(newValue) => setTitle(newValue)}
                />
            </View>
            <View style={styles.buttonContainerStyle}>
                <TouchableOpacity>
                    <Text style={styles.buttonStyle}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginLeft: 25
    },
    inputStyle: {
        fontSize: 20,
        // margin: 25,
        borderColor: 'black',
        borderBottomWidth: 2,
        paddingLeft: 32,
        // flex: 1,
        marginHorizontal: 25,
        marginVertical: 10
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
});

export default DetailScreen;