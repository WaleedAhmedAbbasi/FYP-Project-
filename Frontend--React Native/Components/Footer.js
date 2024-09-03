import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Allah from '../Assets/allah.png';
import Quran from '../Assets/quran.png';
import Pray from '../Assets/praying.png';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const navigateToGalleryScreen = () => {
    navigation.navigate('Gallery');
  };

  const navigateToNamesScreen = () => {
    navigation.navigate('Names');
  };
  const navigateToDuasScreen = () => {
    navigation.navigate('Duas');
  };

  return (
    <View style={[tw`flex-row justify-between items-center px-2 mt-4 `]}>
      <TouchableOpacity
        style={[tw`flex items-center `]}
        onPress={navigateToNamesScreen}>
        <Image source={Allah} style={[tw`w-20 h-20`, {tintColor: 'white'}]} />
        <Text style={[tw`text-white text-sm mt-1`, {marginBottom:5}]}>99 Names </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          tw`flex items-center border-r border-white border-l border-white px-2 `,
        ]}
        onPress={navigateToGalleryScreen}>
        <Image source={Quran} style={[tw`w-24 h-20`, {tintColor: 'white'}]} />
        <Text style={[tw`text-white text-sm mt-1`, {marginBottom:5}]}>Art Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[tw`flex items-center `]}
        onPress={navigateToDuasScreen}>
        <Image source={Pray} style={[tw`w-20 h-20`, {tintColor: 'white'}]} />
        <Text style={[tw`text-white text-sm mt-1`, {marginBottom:5}]}>
          Masnoon Duas
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
