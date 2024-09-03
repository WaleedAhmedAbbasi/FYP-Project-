import React ,{useEffect} from 'react';
import { SafeAreaView, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Results from '../Components/Results';
import LinearGradient from 'react-native-linear-gradient';

const Cure = ({ route }) => {
  const { searchQuery } = route.params;

  useEffect(() => {
    if (searchQuery){
      console.log("Search query received:", searchQuery);
    }
    else{
      console.log("Print Not working")
    }
    }, [searchQuery]);    
  return (
    <LinearGradient
    colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
    style={{ flex: 1 }}
    // colors={['rgba(22,48,32,1)', 'rgba(48,77,48,1)', 'rgba(48,77,48,1)','rgba(45, 75, 45, 1)' ,'rgba(144, 164, 144, 1)']}
      
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[tw``, { marginTop: 50 }]}>
          <Results searchQuery={searchQuery} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cure;
