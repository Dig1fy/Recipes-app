import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    ImageBackground
} from 'react-native';

let Opacity = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
    Opacity = TouchableNativeFeedback;
}
const MealItem = props => {
    return (
        <View style={styles.wrapper}>
            <Opacity onPress={props.onSelectMeal}>
                <View style={{ ...styles.mealContainer, ...props.style }}>
                    <View style={styles.title}>
                        <ImageBackground source={{ uri: props.item.imageUrl }} style={styles.backGrImage} >
                            <Text style={styles.mealItem} numberOfLines={2}>{props.item.title} </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>{props.item.duration}m</Text>
                        <Text style={styles.text}>{props.item.complexity}</Text>
                        <Text style={styles.text}>{props.item.affordability}</Text>
                    </View>
                </View>
            </Opacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealContainer: {
        justifyContent: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'brown',
        borderRadius: 2,
        backgroundColor: '#647e9e',
        marginHorizontal: 5,
        height: '90%',
        overflow: 'hidden'
    },
    mealItem: {
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 25,
        elevation: 5,
        backgroundColor: 'black',
        opacity: 0.6,
        paddingVertical: 2,
        overflow: 'hidden'
    },
    wrapper: {
        flex: 1,
        flexGrow: 1,
        height: 200,
        width: '100%',
        backgroundColor: '#1a2a3d',
        overflow: 'hidden'
    },
    title: {
        color: 'white',
        height: '90%',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        overflow: 'hidden',
        paddingBottom: 5
    },
    text: {
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.7
    },
    backGrImage: {
        height: '100%',
        width: '100%'
    }
})

export default MealItem;