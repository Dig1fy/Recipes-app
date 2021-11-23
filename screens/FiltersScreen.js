import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native';

const SwitchStatement = props => (
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
            value={props.state}
            onChange={props.onChange}
            trackColor={{ true: 'purple', false: 'red' }}
            thumbColor='orange'
        />
    </View>
)

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters:</Text>
            <SwitchStatement label="Gluten-free" state={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} />
            <SwitchStatement label="Lactose-free" state={isLactoseFree} onChange={() => setIsLactoseFree(!isLactoseFree)} />
            <SwitchStatement label="Vegan-free" state={isVegan} onChange={() => setIsVegan(!isVegan)} />
            <SwitchStatement label="Vegeterian" state={isVegeterian} onChange={() => setIsVegeterian(!isVegeterian)} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center'
    }
})

export default FiltersScreen;