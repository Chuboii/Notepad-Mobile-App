import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        top: 50,
        marginBottom:350
    },
    wrapper: {
        backgroundColor: 'black',
        borderRadius:20,
        marginVertical: 5,
        padding: 20,
        paddingHorizontal:0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color:"white",
        width:270
    },
    checkbox: {
        flex:1
    }
})