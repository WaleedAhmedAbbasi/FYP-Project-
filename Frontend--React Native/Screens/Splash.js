import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'tailwind-react-native-classnames';

const Splash = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Display splash screen for 5 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      navigation.replace('Home');
    }
  }, [loading]);

  if (loading) {
    return ( 
      <LinearGradient
      colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
   start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={[tw`text-white text-3xl`]}>KHADIM ASH SHAFEE</Text>
          <Text style={tw`text-white text-xl`}>FOR THE MORALS</Text>
        </View>
      </LinearGradient>
    );
  }

  return null;
};

export default Splash;
