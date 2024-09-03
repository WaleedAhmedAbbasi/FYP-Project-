import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dualist from '../Components/Dualist';
import tw from 'tailwind-react-native-classnames';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios'; // Import axios

const MasDua = ({ item }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("this is ",item)
        // console.warn(item)
        const response = await axios.get(`http://192.168.1.100:5000/get-Duadata/${item.name}`);
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [item]);

  return (
    <>
      <ScrollView contentContainerStyle={[tw`flex-grow`]} style={[tw`flex`]}>
        <View style={[tw`flex justify-center items-center mt-20 p-4`]}>
          {data ? (
            <>
              {/* <Text style={[tw`mb-8 text-white text-2xl font-serif`]}>{data.name}</Text> */}
              <Text style={[tw`mb-8 text-white text-3xl font-serif`]}>{data.name}</Text>
              <Text style={[tw`mb-8 text-white text-3xl`]}>
          بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيم
        </Text>
              <Text style={[tw`mb-8 text-white text-3xl font-serif`]}>{data.ayat}</Text>
              <Text style={[tw`mb-8 text-white text-2xl`]}>{data.eng}</Text>
              <Text style={[tw`mb-8 text-white text-xl text-white`]}>{data.urdu}</Text>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default MasDua;