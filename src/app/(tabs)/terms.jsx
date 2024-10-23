import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



export default function Terms() {
    const router = useRouter()
  return (
    <View className="flex-1 bg-white">
        
        <View className="justify-between w-full flex-row items-center p-3 px-4 mt-12">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full bg-gray-100">
          <Feather name="chevron-left" size={24} color="black"/>
        </TouchableOpacity>
        <Text className="font-semibold text-lg">Terms of use</Text>
        <TouchableOpacity className="p-2 rounded-full">
          <Entypo name="share" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="p-8">
        <View className="mb-4">
          <Text className="font-medium mb-2">1. Introduction</Text>
          <Text className="text-xs">
            Welcome to ECHO. By accessing or using our App, you agree to be bound by these Terms of Use ("Terms"). If you do not agree with these Terms, please do not use the App.
          </Text>
        </View>

        <View className="mb-4">
          
          <Text className="font-medium mb-2">2. Use of the App</Text>
          <Text className="text-xs mb-2">&#8226; The App provides access to news articles and content from various sources through the Newsapi.org API.
          </Text>
          <Text className="text-xs mb-2">&#8226; You agree to use the App only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the App. </Text>

          <Text className="text-xs mb-2">&#8226; You must not use the App to transmit or distribute viruses, malware, or any other harmful code </Text>
  
        </View>

        <View className="mb-4">
          
          <Text className="font-mediu mb-2">3. User Accounts</Text>
          <Text className="text-xs mb-2">&#8226; To access certain features of the App, you may be required to create an account.
          </Text>
          <Text className="text-justify mb-2">&#8226; You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. </Text>

          <Text className="text-xs mb-2">&#8226; You agree to notify us immediately of any unauthorized use of your account or any other breach of security. </Text>
  
        </View>

        <View className="mb-4">
          
          <Text className="font-medium mb-2">4. Content</Text>
          <Text className="text-xs mb-2">&#8226; The content available through the App is provided by third-party news sources and is not controlled by ECHO.
          </Text>
          <Text className=" mb-2">&#8226; We do not guarantee the accuracy, completeness, or usefulness of any content, nor do we endorse any opinions expressed therein. </Text>

          <Text className=" mb-2">&#8226; You acknowledge that reliance on any information provided by the App is at your own risk. </Text>
  
        </View>

        <View className="mb-4">
          
          <Text className="font-medium mb-2">5. Intellectual Property</Text>
          <Text className="text-xs mb-2">&#8226; All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of ECHO or its content suppliers and are protected by applicable intellectual property laws.
          </Text>
          <Text className="text-xs mb-2">&#8226; You may not modify, reproduce, distribute, create derivative works, or exploit any content from the App without our prior written consent. </Text>
  
        </View>


        <View className="mb-4">
          
          <Text className="font-medium  mb-2">6. Termination</Text>
          <Text className="text-xs mb-2">&#8226; We reserve the right to terminate or suspend your access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or to the App.
          </Text>
         
        </View>

        <View className="mb-4">
          
          <Text className="font-medium mb-2">7. Disclaimers and Limitation of Liability</Text>
          <Text className="text-xs mb-2">&#8226; The App is provided "as is" and "as available" without warranties of any kind, either express or implied.
          </Text>
          <Text className="text-xs mb-2">&#8226; We do not warrant that the App will be uninterrupted or error-free, nor do we make any warranty as to the results that may be obtained from the use of the App. </Text>

          <Text className="text-xs mb-2">&#8226; In no event will ECHO be liable for any damages, including but not limited to direct, indirect, incidental, special, or consequential damages, arising out of the use or inability to use the App. </Text>
  
        </View>

        <View className="mb-4">
          
          <Text className="font-medium mb-2">8. Changes to the Terms</Text>
          <Text className="text-xs mb-2">&#8226; We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on the App.
          </Text>
          <Text className="text-xs mb-2">&#8226; Your continued use of the App after any such changes constitutes your acceptance of the new Terms. </Text>
  
        </View>

        <View className="mb-4">
          
          <Text className="font-medium mb-2">9. Governing Law</Text>
          <Text className="text-xs mb-2">&#8226; These Terms are governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles.
          </Text>
          <Text className="text-xs mb-2">&#8226; Your continued use of the App after any such changes constitutes your acceptance of the new Terms. </Text>
  
        </View>

        <View className="mb-24">
          
          <Text className="font-medium mb-2">10. Contact Information</Text>
          <Text className="text-xs mb-2">&#8226; If you have any questions about these Terms, please contact us at contactus@echo.com
          </Text>
  
        </View>

      </ScrollView>
      
    </View>
  )
}