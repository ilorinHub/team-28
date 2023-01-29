import { Image, Text, View,  useWindowDimensions} from "react-native";

import React, {Component} from "react";
import {WebView} from 'react-native-webview';
import { SafeAreaView } from "react-native-safe-area-context";
import { navData } from "../components/NavOptions";
import RenderHtml from 'react-native-render-html';

const EatsScreen = () => {
  return (

    <WebView source={{ uri: 'https://preeminent-gnome-e63810.netlify.app/'}} style={{marginTop: 20}} />


  );
};

export default EatsScreen;
