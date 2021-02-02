import React from 'react';
import { Camera } from 'expo-camera';
import { View, Text, processColor, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import styles from './styles';
import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Loading from './Loading';
import API_KEY from './secrets';

export default class Cam extends React.Component {
    state = {
        captures: [],
        capturing: null,
        text: null,
        chemical: null,
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () => {
        const options = { quality: 0.5, base64: true };
        const photoData = await this.camera.takePictureAsync(options);
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
        this.detectText(photoData.base64)
    };

    handleError = () => {
        this.props.navigation.navigate('Proc', { text: '', error: true })

    }
    
    detectText(base64){
        fetch(`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`, {
            method: 'POST',
            body: JSON.stringify({
              "requests": [{
                "image": { "content": base64 },
                "features": [
                    { "type": "TEXT_DETECTION" }
                ]}]
          })
        })
        .then(response => { return response.json() })
        .then(jsonRes => {
          let text = jsonRes.responses[0].fullTextAnnotation.text
          this.setState({text: text})
          this.props.navigation.navigate('Proc', { text: text, error: false, chemical: this.state.chemical })
        }).catch(err => {
            console.log('Error', err )
            this.setState({text: ''})
            this.handleError()

        })
      }
    

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
        let chem = this.props.navigation.state.params.params.chemical
        this.setState({ hasCameraPermission, chemical: chem });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures, text, error } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }
        else if (captures.length !== 0 && text == null) {
            return (
                <View>
                    <Loading />
                </View>
            )

        }
       
        return (
            <React.Fragment>
                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>

                {/* {captures.length > 0 && <Gallery captures={captures}/>} */}

                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};

