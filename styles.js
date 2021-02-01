
import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    cam: {
        height: 75,
        width: 95,
        paddingTop: 10
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#F7C3EC",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "#F542AD",
        borderColor: "transparent",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7C3EC'
    },
    galleryContainer: { 
        bottom: 100 
    },
    galleryImageContainer: { 
        width: 75, 
        height: 75, 
        marginRight: 5 
    },
    galleryImage: { 
        width: 75, 
        height: 75 
    },
    header: {
        color: 'white', 
        fontSize: 20, 
        fontFamily: 'MarkerFelt-Wide'
    },
    picker: {
        width: 150, 
        height: 40, 
        marginBottom: 15
    },
    labelStyles: {
        color: '#F7C3EC',
        textAlign: 'center',
        fontSize: 18
    },
    activeLabelStyle:   {
        width: '100%',
        backgroundColor: '#F7C3EC',
        color: 'white'
    },
    subtext: {
        color: 'white', 
        fontSize: 12, 
        fontFamily: 'MarkerFelt-Wide',
        paddingBottom: 20,
    }
});