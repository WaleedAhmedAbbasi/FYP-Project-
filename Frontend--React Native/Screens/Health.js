import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import HealthTips from '../Components/HealthTips';
import LinearGradient from 'react-native-linear-gradient';

const Health = () => {
  return (
    <>
      <LinearGradient
        colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
        style={{flex: 1}}>
        <SafeAreaView style={[tw`flex-1`]}>
          <HealthTips />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Health;
