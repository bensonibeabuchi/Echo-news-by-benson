import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoriesCard({ categories, activeCategory, handleCategoryChange, }) {
  return (
    <View>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingRight: 20,}}
        >
            {
                categories.map((category, index) =>{
                    let isActive = category.title == activeCategory;
                    let activeButtonClass = isActive ? "bg-[#0F2058]" : "bg-[#dce4f6]";
                    let activeTextClass = isActive ? "text-white" : "text-[#0F2058]";

                    return (
                        <TouchableOpacity key={index} onPress={() => handleCategoryChange(category.title)} className="flex items-center space-y-1" >
                            <View className={"rounded-md p-3 px-4 " + activeButtonClass}>
                                <Text className={"capitalize " + activeTextClass}>{category.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>
    </View>
  )
}