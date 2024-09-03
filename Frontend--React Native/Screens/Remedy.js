import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DeseaseList from '../Components/DeseaseList';

const Remedy = () => {
  return (
    <>
      <LinearGradient
      colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
      style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1`}>
          <DeseaseList />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Remedy;
