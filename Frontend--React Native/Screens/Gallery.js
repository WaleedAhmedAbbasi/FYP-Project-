import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Galleryapp from '../Components/Galleryapp';
import LinearGradient from 'react-native-linear-gradient';

const Gallery = () => {
  return (
    <>
      <LinearGradient
       colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
       style={{ flex: 1 }}
      >
        <SafeAreaView style={[tw`flex-1`]}>
          <Galleryapp />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Gallery;
