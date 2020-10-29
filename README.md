# Harmful Product Detector
## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

* Create a file called .env.local in the root of the project
* This file is listed in the .gitignore, and will be used to attach your API Key so as not to publish this to Github
* It should look something like:
REACT_APP_API_KEY="YOUR_API_KEY"

## Available Scripts

### `npm install`

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

`npm start -- --reset-cache`

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

See below on an example of how to use the app to detect harmful ingredients in bath & beauty products:

![](ezgif.com-gif-maker.gif)
![](ezgif.com-gif-maker (1).gif)

