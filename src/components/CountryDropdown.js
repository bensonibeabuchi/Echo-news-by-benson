import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const CountryDropdown = ({ onValueChange }) => {
  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Nigeria', value: 'ng' },
    { label: 'United Kingdom', value: 'gb' },
    { label: 'Canada', value: 'ca' },
    { label: 'China', value: 'cn' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Italy', value: 'it' },
    { label: 'Japan', value: 'jp' },
    { label: 'South Africa', value: 'za' },
    { label: 'Sweden', value: 'se' },
    { label: 'Ukraine', value: 'ua' },
  ];

  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => onValueChange(item.value)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CountryDropdown;
