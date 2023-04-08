import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"; 

import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export function VideoView({ videoUrl, handleClose}) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButtom} onPress={handleClose}>
                <Feather name="arrow-left" size={24} color="#FFF" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }, 
    backButtom: {
        width: '100%',
        backgroundColor: '#4cbe6c',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14
    }, 
    backText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    contentView: {
        flex: 1,
        width: '100%'
    }
})