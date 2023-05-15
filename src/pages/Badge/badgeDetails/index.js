import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function BadgeDetails(props){
    return(
        <View style={styles.container}>
            <Text>{props.route.params.id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})