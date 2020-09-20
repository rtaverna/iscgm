import React from 'react';
import { Camera } from 'expo-camera';
import { View, Text, processColor } from 'react-native';
import * as Permissions from 'expo-permissions';
import styles from './styles';
import Toolbar from './Toolbar';
import Gallery from './Gallery';
import API_KEY from './secrets'
export default class Cam extends React.Component {
    camera = null;

    state = {
        captures: [],
        capturing: null,
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

    handleLongCapture = async () => {
        const videoData = await this.camera.recordAsync();
        this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    };
    
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
        .then(response => { return response.json()})
        .then(jsonRes => {
          let text = jsonRes.responses[0].fullTextAnnotation.text
          this.props.navigation.navigate('Proc', { text: text })
        }).catch(err => {
          console.log('Error', err)
        })
      }
    

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
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

                {captures.length > 0 && <Gallery captures={captures}/>}

                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};