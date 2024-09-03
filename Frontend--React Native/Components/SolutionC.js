import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';

const SolutionC = ({ disease }) => {
  const [diseaseData, setDiseaseData] = useState(null);

  useEffect(() => {
    // console.warn("this is selectedddd", disease)
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.1.100:5000/get-dataName/${disease.Name}`);
        setDiseaseData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
  
    fetchData();
  }, [disease]);

  return (
    <ScrollView contentContainerStyle={[tw`flex-grow`]} style={[tw`flex`]}>
      <View style={[tw`flex justify-center items-center mt-12 p-4`]}>
        <Text style={[tw`mb-8 text-white text-3xl font-serif`]}>
          {diseaseData && diseaseData.Name}
        </Text>
        <Text style={[tw`mb-8 text-white text-xl font-serif`]}>
          {diseaseData && diseaseData.Ref}
        </Text>
        <Text style={[tw`mb-8 text-white text-2xl`]}>
          بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيم
        </Text>
        <Text style={[tw`mb-8 text-white text-2xl`]}>
          {diseaseData && diseaseData.Ayat}
        </Text>
        <Text style={[tw`mb-8 text-white text-xl text-white`]}>
          {diseaseData && diseaseData.Eng}
        </Text>
        <Text style={[tw`mb-8 text-white text-xl text-white`]}>
          {diseaseData && diseaseData.Urdu}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SolutionC;
