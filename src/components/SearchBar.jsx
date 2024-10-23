import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import { debounce } from "lodash";
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function SearchBar() {
  const navigation = useNavigation()
  const [query, setQuery] = useState('');
  const [ loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()


  
  const handleSearch = async (text) => {
    setQuery(text);
    if (text.length > 2 ) {
      setLoading(true);
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=981b08fa899d4d44b490545678025616`);
        const filteredNews = response.data.articles.filter(
          (article) => article.title !== "[Removed]"
        )
        router.push('search')
        setResults(filteredNews);
        setError(null);
      } catch (error) {
        setError('Something went wrong:', error)
      } finally {
        setLoading(false)
      }
    } else {
      setResults([]);
    }
  };

  return (
    <View>
        <View className="p-2 w-full rounded-2xl border border-[#0F2058] flex-row items-center justify-between">
            <Feather name="search" size={24} color="#0F2058" />
            <TextInput
            value={query}
            onChangeText={handleSearch}
            placeholder='Search'
            placeholderTextColor="#9EA0A4"
            clearButtonMode='always'
            className="w-11/12 h-full py-3 text-left text-black"
            />
        </View>
        {loading && <ActivityIndicator size="large" color="#132B75" />}
        {error && <Text className="text-red-500 text-center mx-2">{error}</Text>}
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="p-2" >
              <Text className="font-bold"> {item?.source.name}</Text>
            </View>
          )}
        />

    </View>
  )
}