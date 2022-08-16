import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function GettingStarted() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.rocket}>
          <Icon
            name='rocket-outline'
            color='#1A1A1A'
            size={180}
          />
          <Text style={styles.rocketText}>WELCOME TO</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.textPrimary}>SOLUTIONS</Text>
          <Text style={styles.textSecondary}>FINDER</Text>
        </View>
      </View>
      <View style={styles.touchArea}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.touchText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.touchText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}