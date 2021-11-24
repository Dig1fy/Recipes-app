import { CommonActions } from '@react-navigation/routers';
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Ionicons } from "@expo/vector-icons"
import {
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../redux/actions/meals';

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
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);
    let dispatch = useDispatch();

    //useCallback so we don't re-create the function when there are no changes
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegeterian: isVegeterian
        }
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch])

    React.useEffect(() => {
        navigation.setOptions({
            save: saveFilters
        })
        // navigation.dispatch(
        //     CommonActions.setOptions({
        //         name: 'FiltersScreen',
        //         params: {
        //             save: saveFilters,
        //         },
        //     })
        // );
    }, [saveFilters])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons
                    style={{ marginRight: 20 }}
                    name="save-outline"
                    size={30}
                    color="#900"
                    onPress={() => saveFilters()}
                />
            ),
        })
    }, [saveFilters]);


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