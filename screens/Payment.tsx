import { Image, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { navData } from "../components/NavOptions";
import { Button } from "react-native-elements";
import RazorpayCheckout from 'react-native-razorpay';


const handlePayment = () => {
  const options:any = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'NGR',
    key: 'rzp_test_1DP5mmOlF5G5ag',
    amount: '5000',
    name: 'foo',
    prefill: {

      email: '',
      contact: '',
      name: ''
    },
    theme: { color: '#F37254' }
  }
  RazorpayCheckout.open(options).then((data:any) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error:any) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}



    

const Payment = () => {
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
        Make payment now...
      </Text>
      <View>
  <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handlePayment}>Pay Now</button>
</View>
    </SafeAreaView>
  );
};

export default Payment;
