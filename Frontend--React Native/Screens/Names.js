import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Carasole from '../Components/Carasole';
import LinearGradient from 'react-native-linear-gradient';

const Names = () => {
  return (
    <LinearGradient
    colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
   
         style={{ flex: 1 }}
    >
      <SafeAreaView style={[tw`flex justify-center items-center`, { flex: 1 }]}>
        <Carasole />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Names;
