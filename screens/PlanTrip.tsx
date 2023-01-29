import { Image, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { navData } from "../components/NavOptions";
import {WebView} from 'react-native-webview'

const EatsScreen = () => {
  return (

      // <View>
      //   <Image
      //     source={{ uri: navData[1].image }}
      //     style={{ width: 120, height: 120, resizeMode: "contain" }}
      //   />
      // <Text style={{ marginTop: 24, fontSize: 16 }}>
      //   Not yet implemented...
      //   Coming soon...
      // </Text>
      <WebView source={{ uri: 'https://taiwrash.github.io/ridai-web/web.html/'}} style={{marginTop: 20}} />
      // </View>
  
  );
};

export default EatsScreen;
