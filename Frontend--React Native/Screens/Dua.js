import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dualist from '../Components/Dualist';
import tw from 'tailwind-react-native-classnames';

const Dua = () => {
  return (
    <>
      <LinearGradient
       colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
       style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1`}>
          <Dualist />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Dua;
