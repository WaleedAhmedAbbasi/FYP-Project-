import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import CardD from './CardD';

const HealthTips = () => {
  const [filterKey, setFilterKey] = useState('new');

  const jsonData = [
    {
      uri: 'https://i.pinimg.com/originals/c9/a8/49/c9a849442771fc58a3e0b3874447cf72.png',
      title: 'Fever',
      key: 'new',
      content: 'The Prophet sallallaahu `alayhi wa sallam (may Allah exalt his mention) said: “When a believer gets sick or feverish, it is like metal when put on fire, the bad is gone and the good remains.”',
    },
    {
      uri: 'https://i.pinimg.com/736x/41/f7/df/41f7df1278e44e22fb2d8370427b5e48.jpg',
      title: 'Headache',
      key: 'new',
      content: 'The headache that afflicts the believer, or a thorn that pricks him/her, or anything that harms him/her, Allah will raise him/her a degree on the day of resurrection and expiate his/her sins due to it',
    },
    {
      uri: 'https://tips4human.wordpress.com/wp-content/uploads/2016/07/fb_img_1467855338107.jpg',
      title: 'Drink Water',
      key: 'popular',
      content: 'Allah has declared water as the basis and origin of life “We made from water every living thing....',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHplEwTW5_prcyk_zEjzrVuyriST1Z3jPdg&s',
      title: 'Date',
      key: 'popular',
      content: 'The Quran also narrates the incidence when Maryam, may Allah be pleased with her, was provided with fresh ripe dates when she was feeling pain during childbirth',
    },
    {
      uri: 'https://cdn5.vectorstock.com/i/1000x1000/42/54/healthy-sleep-tips-infographic-causes-of-insomnia-vector-43194254.jpg',
      title: 'Sleep',
      key: 'most',
      content: 'And among His signs is your sleep by night and by day and your seeking of His bounty, verily in that are signs for those who hearken',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_Tistoh4aaUlkpbJoTiW8vb4nx9_bAKw8g&s',
      title: 'Eating',
      key: 'most',
      content: 'Eat ye and drink ye, with full satisfaction; because of the (good) that ye sent before you, in the days that are gone!',
    },
    // Add more objects as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, filterKey === 'new' && styles.activeButton]}
            onPress={() => setFilterKey('new')}>
            <Text style={styles.buttonText}>New in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, filterKey === 'popular' && styles.activeButton]}
            onPress={() => setFilterKey('popular')}>
            <Text style={styles.buttonText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, filterKey === 'most' && styles.activeButton]}
            onPress={() => setFilterKey('most')}>
            <Text style={styles.buttonText}>Most Viewed</Text>
          </TouchableOpacity>
        </View>

        {jsonData
          .filter(data => data.key === filterKey)
          .map((data, index) => (
            <View
              key={index}
              style={styles.cardContainer}>
              <CardD {...data} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#c0c0c0', // or any other color to highlight the active button
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  cardContainer: {
    marginBottom: 10,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HealthTips;
