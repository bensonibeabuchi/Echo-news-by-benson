import { Tabs } from 'expo-router'
import Icon from 'react-native-remix-icon';

export default function TabLayout() {
  return (
    <Tabs 
      initialRouteName='index'
      screenOptions={{ 
        tabBarActiveTintColor: 'white',       
        tabBarInactiveTintColor: '#4360BD', 
        tabBarStyle: { backgroundColor: '#132B75' }, 
        headerStyle: { backgroundColor: '#dce4f6'},
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ri-home-fill" size="24" color={color}></Icon>
          ),
        }}
      />
    
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ri-search-fill" size="24" color={color}></Icon>
          ),
        }}
      />

      <Tabs.Screen
        name="privacy"
        options={{
          title: 'Privacy Policy',
          tabBarIcon: ({ color }) => (
            <Icon name="ri-folder-2-line" size="24" color={color}></Icon>
          ),
        }}
      />

      <Tabs.Screen
        name="terms"
        options={{
          title: 'Terms of Use',
          tabBarIcon: ({ color }) => (
            <Icon name="ri-file-list-3-line" size="24" color={color}></Icon>
          ),
        }}
      />
    </Tabs>
  )
}
