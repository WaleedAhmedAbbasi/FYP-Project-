import React from 'react';
import {Card, Text} from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';

const CardD = ({uri, title, content, t}) => {
  return (
    <Card style={[tw`p-2 w-80  `]}>
      <Card.Cover source={{uri: uri}} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardD;
