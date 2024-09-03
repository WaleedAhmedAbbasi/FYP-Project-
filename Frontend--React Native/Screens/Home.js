import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import SwitchComponent from '../Components/SwitchComponent'; // Assuming SwitchComponent is in the same directory
import tw from 'tailwind-react-native-classnames';
import Buttons from '../Components/Buttons';
import Footer from '../Components/Footer';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <LinearGradient
    colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
     
   style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <ScrollView contentContainerStyle={tw`flex-grow`}>
          <View style={[tw`w-full h-80`]}>
            <ImageBackground
              source={require('../Assets/bg.png')}
              style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                position: 'relative',
              }}>
              <View
                style={[
                  tw`flex justify-center items-center mt-3`,
                  { marginBottom: 230, padding: 20 },
                ]}>
                <SwitchComponent />
              </View>
            </ImageBackground>
          </View>
          <Buttons />
        </ScrollView>
        <Footer style={tw`w-full absolute bottom-0`} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
