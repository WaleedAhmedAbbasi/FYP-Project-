import React from 'react'
import { SafeAreaView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MasDua from '../Components/MasDua';
import tw from 'tailwind-react-native-classnames';

const MasnonDua = ({ route }) => {
  const { item } = route.params;
  return (
   <> 
 <LinearGradient
      
      colors={['#1c402a', '#1c402a', '#1c402a', '#1c402a', '#1c402a']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[tw``, { marginTop: 50 }]}>
         <MasDua item ={item} />
         {console.log("this is ",item)}
        </View>
      </SafeAreaView>
    </LinearGradient>
   </>
  )
}

export default MasnonDua
