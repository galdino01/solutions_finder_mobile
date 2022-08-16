import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Post({nickname, title, text, created_at}) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Text style={styles.postText}>Created by: </Text>
        <Text style={styles.postText}>{nickname}</Text>
      </View>
      <Text style={styles.postText}>{"< " + title + " >"}</Text>
      <Text style={styles.postText}>{"`` " + text + " ``"}</Text>
      <View style={styles.footer}>
        <Text style={styles.postText}>Created at: </Text>
        <Text style={styles.postText}>{created_at}</Text>
      </View>
    </View>
  )
}