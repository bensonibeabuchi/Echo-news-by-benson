import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import Icon from 'react-native-remix-icon';


import { useRouter } from 'expo-router';
import { WebView } from "react-native-webview";
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function NewsDetails() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const { url } = useLocalSearchParams();

  


  return (
    <View className="flex-1 bg-white">
      <View className="justify-between w-full flex-row items-center p-3 px-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full bg-gray-100">
          <Icon name="ri-arrow-left-line" size="24" color="black"></Icon>
        </TouchableOpacity>
        <Text>News Details</Text>
        <TouchableOpacity className="p-2 rounded-full bg-gray-100">
        <Icon name="ri-share-line" size="24" color="black"></Icon>
        </TouchableOpacity>
      </View>

      {/* WEBVIEW */}
      <View className="flex-1">
        <WebView
        source={{ uri: url }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
        mediaPlaybackRequiresUserAction = {true}
        allowsFullscreenVideo = {false}
        originWhitelist={['*']}
        javaScriptEnabled={true}  // Enable JavaScript execution
        domStorageEnabled={true}   // Enable DOM storage

        />
        {visible && (
          <View style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -15 }, { translateY: -15 }] }}>
            <ActivityIndicator size="large" color="#0F2058" />
          </View>
        )}
  
      </View>
      <Text>News</Text>
    </View>
  )
}