import React from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import ItemScreen from "./ItemScreen";

const CardScreen = ({ navigation }) => {

    const array = useSelector(state => state);
    const dispatch = useDispatch();

    const renderItem = ({ item }) => {
        return <ItemScreen navigation={navigation} data={item}/>
    };

    return(
        <View style={{flex:1}}>
            <FlatList 
                data={array}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CardScreen;