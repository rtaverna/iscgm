import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         visible: !this.state.visible
//       });
//     }, 2000);
//   }

  render() {
    const { visible } = this.state;
    return (
      <AnimatedLoader
        visible={visible}
        overlayColor="#F7C3EC"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});