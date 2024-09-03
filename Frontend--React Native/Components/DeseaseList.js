import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios'; 

const DeseaseList = () => {
  const navigation = useNavigation();
  const [names, setNames] = useState([]); // State to hold the fetched names
  const [selectedDisease, setSelectedDisease] = useState(null); 

  useEffect(() => {
    // Function to fetch names from the endpoint
    const fetchNames = async () => {
      try {
        const response = await axios.get('http://192.168.1.100:5000/get-Names'); // Replace 'your-endpoint-url' with your actual endpoint
        setNames(response.data); // Set the fetched names in the state
      } catch (error) {
        console.error('Failed to fetch names:', error);
      }
    };

    // Call the fetchNames function when the component mounts
    fetchNames();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const navigateToSolution = (disease) => {
    // console.warn('Selected disease:', disease.Name); // Log the selected disease
    setSelectedDisease(disease); // Update the selected disease state
   
    navigation.navigate('Solution', { disease });
  };

  return (
    <SafeAreaView style={[tw`flex-1 justify-center items-center`, { marginTop: 50 }]}>
      <View style={[tw`bg-white rounded-lg`, { width: 300, height: 500 }]}>
        <FlatList
          data={names} // Use the names state as the data source for FlatList
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToSolution(item)} style={styles.item}>
              <Text style={styles.text}>{item.Name}</Text>
              <View style={styles.line} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 15,
    // Remove fixed height to allow dynamic content size
  },
  text: {
    marginBottom: 8,
    color: 'black',
    fontSize: 16, // Increase this value to make the font larger
    flexWrap: 'wrap', // Ensure text wraps properly
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '90%',
  },
});

export default DeseaseList;

