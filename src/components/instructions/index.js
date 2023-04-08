import { View, Text, StyleSheet } from "react-native";

export function Instructions({ data, index }) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.indice }>{ index + 1 }- </Text>
            <Text style={ styles.text }>{ data.text }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 8
    },
    indice: {
        fontWeight: "bold",
        fontSize: 18
    },
    text: {
        lineHeight: 20
    }
})