import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function Privacy() {
    const router = useRouter()

  return (
    <View className="flex-1 bg-white">
        
    <View className="justify-between w-full flex-row items-center p-3 px-4 mt-12">
      <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full bg-gray-100">
        <Feather name="chevron-left" size={24} color="black"/>
      </TouchableOpacity>
    <Text className="font-semibold text-lg">Privacy Policy</Text>
    <TouchableOpacity className="p-2 rounded-full">
      <Entypo name="share" size={24} color="white" />
    </TouchableOpacity>
  </View>

  <ScrollView className="p-8">
    <View className="mb-4">
      <Text className="font-medium mb-2">1. Introduction</Text>
      <Text className="text-justify text-xs">
      At ECHO, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our App.
      </Text>
    </View>

    <View className="mb-4">
      
      <Text className="font-medium mb-2">2.  Information We Collect</Text>
      <Text className=" mb-2 text-xs">&#8226; Personal Information: When you create an account, we may collect personal information such as your name, email address, and any other information you provide.
      </Text>
      <Text className=" mb-2 text-xs">&#8226; Usage Data: We may collect information about how you use the App, such as the features you use, the articles you read, and the time and duration of your sessions. </Text>

      <Text className=" mb-2 text-xs">&#8226; Device Information: We may collect information about the device you use to access the App, including the hardware model, operating system, and device identifiers.</Text>

    </View>

    <View className="mb-4">
      
      <Text className="font-medium mb-2">3. How We Use Your Information</Text>
      <Text className="text-xs">&#8226; To provide, maintain, and improve the App.
      </Text>
      <Text className="text-xs">&#8226; To personalize your experience and provide content tailored to your interests. </Text>

      <Text className="text-xs">&#8226; To communicate with you, including sending updates and promotional materials. </Text>

      <Text className="text-xs mb-2">&#8226; To monitor and analyze trends, usage, and activities in connection with the App. </Text>

    </View>

    <View className="mb-4">
      
      <Text className="font-medium mb-2">4. Sharing Your Information</Text>
      <Text className="text-xs mb-2">&#8226; We may share your information with third-party service providers who assist us in operating the App, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
      </Text>
      <Text className="text-xs mb-2">&#8226; We may also share your information to comply with legal obligations, protect our rights and property, or prevent fraud or other illegal activities. </Text>

    </View>

    <View className="mb-4">
      
      <Text className="font-medium  mb-2">5. Security</Text>
      <Text className="text-xs mb-2"> We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
      </Text>
    

    </View>


    <View className="mb-4">
      
      <Text className="font-medium mb-2">6. Your Choices</Text>
      <Text className="text-xs mb-2">&#8226; You may update or delete your account information at any time by logging into your account.
      </Text>
      <Text className="text-xs mb-2">&#8226; You may opt-out of receiving promotional communications from us by following the instructions in those communications.
      </Text>
     
    </View>

    <View className="mb-4">
      
      <Text className="font-medium mb-2">7. Changes to this Privacy Policy</Text>
      <Text className="text-xs mb-2">We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide additional notice (such as adding a statement to our homepage or sending you a notification).
      </Text>
      

    </View>

    <View className="mb-24">
      
      <Text className="font-medium mb-2">8. Contact Us</Text>
      <Text className="text-xs mb-2">&#8226; If you have any questions about this Privacy Policy, please contact us at contactus@echo.com.
      </Text>

    </View>


  </ScrollView>
  
</View>
  )
}