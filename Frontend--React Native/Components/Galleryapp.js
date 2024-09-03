import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Gallery from 'react-native-awesome-gallery'; // Import Gallery from react-native-awesome-gallery
import tw from 'tailwind-react-native-classnames';
import ImageView from 'react-native-image-viewing';

import 'react-native-gesture-handler';

import {useState, useRef} from 'react';

const GalleryItem = ({imageUri}) => {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setVisible(true)}>
      <Image
        source={{uri: imageUri}}
        style={{width: 150, height: 150, margin: 4, borderRadius: 10}}
      />
      <ImageView
        images={[{uri: imageUri}]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </TouchableOpacity>
  );
};

const CustomGallery = ({data, onIndexChange}) => {
  return <Gallery data={data} onIndexChange={onIndexChange} />;
};

const Galleryapp = () => {
  const images = [
    'https://en.pimg.jp/090/228/895/1/90228895.jpg',
    'https://en.pimg.jp/090/228/884/1/90228884.jpg',
    'https://as2.ftcdn.net/v2/jpg/03/52/99/77/1000_F_352997747_wSi8elahzudeYiFmy6uYwWGtqEATOLUA.jpg',
    'https://t4.ftcdn.net/jpg/05/04/16/89/240_F_504168907_ogH3mLa6idtjGa3OLPAkfkldRGIQhYY2.jpg',
    'https://t3.ftcdn.net/jpg/03/32/60/48/240_F_332604804_9S2SrSLVD7PeghhzjLG1KyJXNOvuHgMH.jpg',
    'https://t4.ftcdn.net/jpg/05/42/34/83/240_F_542348323_k3w2Rdt6LmciV6MjthVeeMmJ4M34aAbu.jpg',
    'https://t4.ftcdn.net/jpg/05/07/31/69/240_F_507316906_ST6pVKOAJbZqPA3F8uJEt0OnnT7qxBnn.jpg',
    'https://t3.ftcdn.net/jpg/05/97/93/56/240_F_597935649_PAJr0UwgHFrU459poJ1qfqBu0IA3lObY.jpg',
    'https://t3.ftcdn.net/jpg/06/89/18/46/240_F_689184665_xQlboZECnYOopDXJY8kWHESQbjG3cQhG.jpg',
    'https://t3.ftcdn.net/jpg/04/74/38/08/240_F_474380887_QtqzbiNcY6Tda04Iv5w7fvVjsdIZmoBz.jpg',
    'https://t4.ftcdn.net/jpg/06/68/85/17/240_F_668851720_PDrDdyc4daxZ6Mq50cfY9s1qZPem7gw1.jpg',
    'https://t3.ftcdn.net/jpg/00/47/38/82/240_F_47388232_esyIcjfCGUX8QGEySEqYI91szn72CiDg.jpg'
  ]; // Remote image link

  return (
    <>
      <ScrollView>
        <SafeAreaView style={{marginTop: 50, padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              borderColor: 'white',
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            {images.map((image, index) => (
              <GalleryItem key={index} imageUri={image} />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Galleryapp;
