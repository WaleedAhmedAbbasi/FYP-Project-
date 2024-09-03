import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Text>Custom Drawer Content</Text>
        <Button title="Home" onPress={() => props.navigation.navigate('Home')} />
        {/* <Button title="Settings" onPress={() => props.navigation.navigate('Settings')} /> */}
        <Button title="Solution" onPress={() => props.navigation.navigate('Solution')} />
      </View>
      {/* This component renders the rest of the items in the default drawer */}
      <DrawerItemList {...props} />
      {/* You can also add custom items */}
      <DrawerItem
        label="Help"
        onPress={() => {
          // Custom logic for handling the "Help" button press
        }}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
