/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { firebaseConfig } from "./src/utils/firebase";
import firebase from "@react-native-firebase/app";

// const init = async () => {
//   console.log("firebase apps:", firebase.apps);
//   if (firebase.apps.length === 0) {
//     await firebase.initializeApp(firebaseConfig, {
//       name: "[DEFAULT]",
//     });
//   } else console.log("firebase app:", firebase.apps[0].name);
// };

// init();
AppRegistry.registerComponent(appName, () => App);
