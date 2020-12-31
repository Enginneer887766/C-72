import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends React.Component {
    render() {
        return(
            <Text style={styles.text}>Search</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize:20,
        fontWeight:"bold"
        

    }
})
