import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import SolutionC from '../Components/SolutionC';
import LinearGradient from 'react-native-linear-gradient';

const Solution = ({route}) => {
  const {disease} = route.params;

  return (
    <LinearGradient
    colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
   
      //'rgba(22,48,32,1)','rgba(48,77,48,1)','rgba(48,77,48,1)','rgba(45, 75, 45, 1)','rgba(144, 164, 144, 1)',
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={[tw``, {marginTop: 50}]}>
          <SolutionC disease={disease} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Solution;
