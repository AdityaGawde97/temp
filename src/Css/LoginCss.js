import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

/************************************ Sign Up Page Css ***********************************/

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    appTitle: {
        flex: 0,
        fontSize: 26,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        top: 50,
    },

    createTitle: {
        flex: 0,
        alignSelf: 'center',
        fontSize: 27,
        top: 50,
    },

    subTitle: {
        flex: 0,
        alignSelf: 'center',
        fontSize: 20,
        top: 60
    },

    inputContainer: {
        flex: 9,
        flexDirection: 'column',
        alignItems: 'center',
        top: 100
    },

    inputView: {
        flex: 0,
        width: 370,
    },

    inputView2: {
        flex: 0,
        width: 370,
        top: 15
    },

    passIconView: {
        flex: 0,
        flexDirection: 'row',
        width: 370,
        top: 0,
    },

    passIconViewInSignIn: {
        flex: 0,
        flexDirection: 'row',
        width: 370,
        top: 15,
    },

    passView: {
        flex: 0,
        width: 330,
    },

    passView2: {
        flex: 0,
        width: 330,
        alignSelf: 'flex-start',
        top: 10,
    },

    passIcon: {    
        flex: 0,    
        width: 35,
        height: 35,
    },
    nextInSignUp: {
        flex: 0,
        width: 180,
        alignSelf: 'flex-end',
        padding: 35,
    },

    nextInSignIn: {
        flex: 0,
        width: 180,
        padding: 45,
    },

    createButton:{
        flex: 0,
        alignSelf: 'flex-start',
        width: 260,
        padding: 45,
    }

});