import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';


const Search = ({route}) => {
  const {recentSearches} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Searches</Text>
      <FlatList
        data={recentSearches}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.key}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Search;
