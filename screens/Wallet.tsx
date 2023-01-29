import { Alert, Image, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { navData } from "../components/NavOptions";
import { Button } from "react-native-elements";
import RazorpayCheckout from 'react-native-razorpay';

const handleConnectENairaWallet = () => {
  const options:any = {
    description: 'Credits to take a ride',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'NGR',
    key: 'rzp_test_1DP5mmOlF5G5ag',
    amount: '5000',
    name: 'foo',
    prefill: {
      email: 'void@razorpay.com',
      contact: '9191919191',
      name: 'Razorpay Software'
    },
    theme: {color: '#F37254'}
  }
  RazorpayCheckout.open(options).then((data:any) => {
    // handle success
    // alert(`Success: ${data.razorpay_payment_id}`);
    console.log(`Success: ${data.razorpay_payment_id}`);
  }).catch((error:any) => {
    // handle failure
    // alert(`Error: ${error.code} | ${error.description}`);
    console.log(`Error: ${error.code} | ${error.description}`);
  });

  Alert.alert(
    'E-Naira Wallet Connection in Progress',
    'After this process, there will be a complete connection to your e-naira walllet. Do you want to cancel me ?',
    [
      {
        text: 'Yes',
        onPress: () => alert('You Pressed Yes, you can now complete your payment'),
      },
      {
        text: 'No',
        onPress: () => alert('You pressed No, Connect to access our services'), style: 'cancel'
      },
    ],
    {cancelable: false},
  )};

const Wallet = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Image
          source={{ uri: navData[1].image }}
          style={{ width: 120, height: 120, resizeMode: "contain" }}
        />
      </View>
      <Text style={{ marginTop: 24, fontSize: 16 }}>
        Connect your E-Naira Wallet with Ease...
      </Text>
      <View >
      <Button title="Connect" onPress={handleConnectENairaWallet} />
    </View> 
    </SafeAreaView>
  );
};


export default Wallet;
