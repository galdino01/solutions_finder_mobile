import React from 'react';
import { View, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.rocket}
        name='rocket-outline'
        color={props.color}
        size={25}
      />
      <View style={styles.textArea}>
        <Text style={{color: props.color, fontSize: 20, fontWeight: "bold",}}>SOLUTIONS</Text>
        <Text style={{color: props.color, fontSize: 20, fontWeight: "400",}}>FINDER</Text>
      </View>
    </View>
  )
}