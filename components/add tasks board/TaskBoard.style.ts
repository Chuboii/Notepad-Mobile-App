import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: 'gray',
        left: 0,
        right: 0,
        marginHorizontal: 10,
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: 10, height: 0 }, // Shadow offset (x, y)
        shadowOpacity: 0.95, // Shadow opacity
        shadowRadius: 1, // Shadow blur radius
        elevation: 5, // Elevation for Android
        borderRadius:20,
        bottom: 150,
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
        fontSize:17
     
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