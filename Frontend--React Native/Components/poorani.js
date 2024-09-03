import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';

const Buttons = () => {
  const navigation = useNavigation();
  const navigateToHealthScreen = () => {
    navigation.navigate('Health');
  };
  const navigateToDiseasehScreen = () => {
    navigation.navigate('Remedy');
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 2,
      }}>
      <TouchableOpacity
        style={[
          tw`flex-row justify-between items-center p-4 border border-white rounded-lg bg-white drop-shadow-2xl`,
          {width: 270, marginVertical: 7},
        ]}
        onPress={navigateToDiseasehScreen}>
        <View>
          <Text style={[tw`text-white text-xl text-black`]}>
            Disease & Remedy
          </Text>
          <Text style={[tw`text-white text-sm text-black`]}>
            Tap to see the list
          </Text>
        </View>
        <Icon name="right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          tw`flex-row justify-between items-center p-4 border border-white rounded-lg bg-white drop-shadow-2xl`,
          {width: 270, marginVertical: 7},
        ]}
        onPress={navigateToHealthScreen}>
        <View>
          <Text style={[tw`text-white text-xl text-black`]}>
            Health Tips & Articles
          </Text>
          <Text style={[tw`text-white text-sm text-black`]}>Tap to read</Text>
        </View>
        <Icon name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
