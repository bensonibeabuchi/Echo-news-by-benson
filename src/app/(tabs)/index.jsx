import { View, Text, SafeAreaView, TextInput, StatusBar, Image, TouchableOpacity, RefreshControl, Platform, ActivityIndicator, FlatList, Modal } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import axios from 'axios'
import placeholder from '../../assets/images/default_image.jpg'
import CategoriesCard from '../../components/CategoriesCard'
import { categories } from '../../constants'
import CountryDropdown from '../../components/CountryDropdown';
import Icon from 'react-native-remix-icon';




export default function index() {
  const router = useRouter();
  const [ news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState('us');


  const API_KEY2 = '55723df2ad2b4324a023948ca4035031'
  const API_KEY = '981b08fa899d4d44b490545678025616'
  const apiBaseUrl = 'https://newsapi.org/v2';



  useEffect(() => {
    fetchNews();
  },[activeCategory, activeCountry]);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/top-headlines?pageSize=100&country=${activeCountry}&category=${activeCategory}&apiKey=${API_KEY}`);
      setNews(response.data.articles);
    } catch (err) {
      try {
        const response = await axios.get(`${apiBaseUrl}/top-headlines?pageSize=100&country=${activeCountry}&category=${activeCategory}&apiKey=${API_KEY2}`);
        setNews(response.data.articles);
      } catch (error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNews().then(() => setRefreshing(false));
  }, []);

  function formatDate(isoDate) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options)

  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  }

  const handlePress = () => {
    setModalVisible(true);
  };

  const setNewCountry = (newCountry) => {
    setActiveCountry(newCountry);
    console.log(newCountry)
    setModalVisible(false);
  };


  if (error) {
    return <Text className="font-semibold h-screen flex-1 justify-center items-center text-center mt-48 text-red-500 text-xl p-8">
      😕 Error Loading news
      </Text>
  }



  return (

    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 32: 0 }} className="mt-12">
     <StatusBar style="auto" />
      <View className="px-5">

        {/* HEADER */}
        <View className="flex-row justify-between items-center mt-3">
          <View>
            <Text className="text-xl text-[#0F2058] font-semibold">Welcome</Text>
            <Text className="text-[10px] text-[#0F2058]" >Discover a world of news that matters to you</Text>
            <Text className="text-[10px] text-[#0F2058] font-medium" >Powered by NewsApi.org</Text>
          </View>
          <View>


          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text>Country: {activeCountry}</Text>
          </TouchableOpacity>


       

            <Modal
              transparent={true}
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View className="flex-1 justify-center items-center" >
                <View className="w-4/5 bg-white p-4 rounded-lg" >
                  <CountryDropdown onValueChange={setNewCountry} />
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text className="mt-4 text-[#0F2058] text-center">Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>


          </View>
        </View>



        {/* SEARCH BAR */}

        <TouchableOpacity onPress={() => router.push('search')} className="my-4">
          {/* <SearchBar/> */}
          <View className="p-2 w-full rounded-2xl border border-[#0F2058] flex-row items-center justify-between">
            <Icon name="ri-search-line" size="24" color="#0F2058"></Icon>
            <TextInput
            placeholder='Search'
            onPress={() => router.push('search')}
            placeholderTextColor="#9EA0A4"
            clearButtonMode='always'
            className="w-11/12 h-full py-3 text-left text-black"
            />
        </View>
        </TouchableOpacity>

        {/* CATEGORIES */}

        <View className="flex-row gap-2 p-2">
          <CategoriesCard categories={categories} activeCategory={activeCategory} handleCategoryChange={handleCategoryChange} />
        </View>

        
        {/* NEWS DISPLAY */}
        <View className="pb-96">
          {
          isLoading ?
          <View className="justify-center items-center">
            <ActivityIndicator size="large" color="#132B75" />
          </View>
          :
          <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          ListEmptyComponent={
            <View className="mt-8">
              <Text>
                No news found
              </Text>
            </View>
          }
          renderItem={ ({ item, index }) => {
            return (
              <View key={item.id} className="my-4 rounded-lg bg-[#f1f1f1] p-3 shadow-md">
                <View>
                  <View className="w-full h-48 rounded-lg">
                    <Image 
                      source={item.urlToImage ? {uri: item.urlToImage} : placeholder} 
                      style={{ width: '100%', height: '100%' }} 
                      resizeMode="cover" 
                      className="rounded-lg"
                    />
                  </View>
                  <View className="my-2">

                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center">
                        <Text className="font-bold"> {item?.source.name}</Text>

                      </View>
                      <Text className="italic"> {formatDate(item.publishedAt)} </Text>
                    </View>

                    <View className="mt-2 h-16 truncate w-11/12">
                      <Text className="text-lg font-bold truncate">{ item?.title ? item.title.length > 80 ? item.title.slice(0, 65) + "..." : item.title.split(" - ")[0] : "N/A"}</Text>
                    </View>
                    <View className="h-[48]">
                      <Text className="truncate text-[12px]">
                      { item?.description ? item.description.length > 150 ? item.description.slice(0, 100) + "..." : item.description.split(" - ")[0] : "No content available"}
                      </Text>
                    </View>
                    <View className="flex-row justify-between items-center">
                      <TouchableOpacity onPress={() => router.push({ pathname: 'pages/NewsDetails', params: { url: item.url } })} className="bg-[#0F2058] rounded p-3 w-24">
                        <Text className='text-white'>
                          Read more
                        </Text>
                      </TouchableOpacity>
                    </View>

                  </View>

                </View>
              </View>
            )
          }}
          /> 
          }
        

        </View>
      </View>
    </SafeAreaView>

  )
}