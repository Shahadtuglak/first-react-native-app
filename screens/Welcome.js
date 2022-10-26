import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


const Welcome = ({ navigation }) => {
    return (
        <View>
            <Button title='Contact' color="red" onPress={() => navigation.navigate('contact')} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Welcome
