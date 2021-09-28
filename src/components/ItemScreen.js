import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/core";

const ItemScreen = ({ data, navigation }) => {
    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 15 }}
            onPress={() => navigation.navigate("Detail")}
        >
            <Image style={styles.imageStyle} source={{ uri: data.image }} />
            <View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titleStyle}>{data.title}</Text>
                    <Text>{data.location}</Text>
                </View>
                <Text>{data.numberOfLikes} Likes</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
        marginRight: 15
    },
    titleStyle: {
        fontSize: 15,
    },
    likesStyle: {
        marginTop: 41
    }
});

export default ItemScreen;