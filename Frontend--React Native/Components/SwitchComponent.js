import React, { useState, useEffect } from 'react';
import { Searchbar  } from 'react-native-paper';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import axios from 'axios'; // Import axios for fetching data

const SwitchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); // Initialize navigation
  const [names, setNames] = useState([]); // State to store fetched names

  useEffect(() => {
    // Function to fetch names from the endpoint
    const fetchNames = async () => { 
      try {
        const response = await axios.get('http://192.168.1.100:5000/get-Names'); 
        setNames(response.data); // Set the fetched names in the state
        // console.log("this",response.data)
      } catch (error) {
        console.error('Failed to fetch names:', error);
      }
    };

    // Call the fetchNames function when the component mounts
    fetchNames();
  }, []);

  const onChangeText = (text) => {
    setSearchQuery(text);
  };

  const onSubmitEditing = async () => {
    // Check if the entered text matches any of the Name fields in the response data
    const matchedName = names.find(name => name.Name.toLowerCase() === searchQuery.toLowerCase());
    // console.log("Search Query:", searchQuery);
    // console.log("Matched Name:", matchedName);
    if (!matchedName) {
      // If no match is found, show an alert
      Alert.alert('Not Found', 'Disease not found');
    } else {
      // Pass searchQuery to Results component
      navigation.navigate('Cure', { searchQuery });
    }
  };

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeText}
        value={searchQuery}
        onSubmitEditing={onSubmitEditing} // Triggered when the user submits the search query
      />
     
    </>
  );
};

export default SwitchComponent;
