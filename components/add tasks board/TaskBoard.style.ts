import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: 'gray',
        left: 0,
        right: 0,
        marginHorizontal: 10,
        borderRadius:20,
        bottom: 200,
        height:150,
        zIndex: 1000,
        justifyContent:"space-between"
    },
    wrapper: {
        flexDirection: "row",
        marginTop:10
    },
    input: {
        flex: 1,
     
    },
    btn: {
        margin:20,
        alignSelf: 'flex-end',
        
    },
    text: {
        fontSize: 18,
        color:'yellow'
    }
})