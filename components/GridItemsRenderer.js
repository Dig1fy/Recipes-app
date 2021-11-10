import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Platform,
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';

let OpacityWrapper = TouchableOpacity;
if (Platform.OS === 'android' && Platform.Version >= 21) {
    OpacityWrapper = TouchableNativeFeedback;
}

const GridItemRenderer = props => {
    return (
        <View style={{ ...styles.gridItem, ...props.style }}>
            <OpacityWrapper
                onPress={() => { props.onButtonPress() }}
            >
                <View style={{ ...styles.itemContainer, ...{ backgroundColor: props.itemColor } }}>
                    <Text numberOfLines={2} style={styles.title}>{props.itemTitle}</Text>
                </View>
            </OpacityWrapper>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 120,
        textAlign: 'right',
        overflow: 'hidden'
    },
    itemContainer: {
        padding: 10,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 2,
        shadowOpacity: 0.8,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        textAlign: 'center'
    }
})

export default GridItemRenderer;