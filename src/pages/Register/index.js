import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './../../components/Header';
import styles from './styles';

import api from '../../services/api';
export default function Register() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(true);
  const [userData, setUserData] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    setUserData(data);
    register();
  }

  function register() {
    api.post('/auth/register', userData)
    .then((response) => {
      try {
        Alert.alert(response.data);
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
    });  
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('GettingStarted')}
      >
        <Header color="#C9C9C9" />
      </TouchableOpacity>
      <View style={styles.form}>
        <TouchableWithoutFeedback
          touchSoundDisabled
          style={styles.TouchableWithoutFeedback}
          onPress={() => Keyboard.dismiss()}
          accessible={false}
        >
          <View style={styles.signUpArea}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.icon}
                name="remove-outline"
                color="#C9C9C9"
                size={15}
              />
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholderTextColor="#C9C9C9"
                    placeholder="Name"
                    keyboardType="default"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'The name field must be required.'
                  },
                  maxLength: {
                    value: 255,
                    message: 'The name accepts a maximum of 255 caracters.'
                  },
                }}
              />
            </View>
            <Text style={styles.error}>{errors.name?.message}</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.icon}
                name="reorder-two-outline"
                color="#C9C9C9"
                size={15}
              />
              <Controller
                control={control}
                name="last_name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholderTextColor="#C9C9C9"
                    placeholder="Last Name"
                    keyboardType="default"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'The last name field must be required.'
                  },
                  maxLength: {
                    value: 255,
                    message: 'The last name accepts a maximum of 255 caracters.'
                  },
                }}
              />
            </View>
            <Text style={styles.error}>{errors.last_name?.message}</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.icon}
                name="person-outline"
                color="#C9C9C9"
                size={15}
              />
              <Controller
                control={control}
                name="nickname"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholderTextColor="#C9C9C9"
                    placeholder="Nickname"
                    keyboardType="default"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'The nickname field must be required.'
                  },
                  minLength: {
                    value: 4,
                    message: 'The nickname field accepts a minimum of 4 caracters.'
                  },
                  maxLength: {
                    value: 16,
                    message: 'The nickname field accepts a maximum of 16 caracters.'
                  },
                }}
              />
            </View>
            <Text style={styles.error}>{errors.nickname?.message}</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.icon}
                name="mail-outline"
                color="#C9C9C9"
                size={15}
              />
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholderTextColor="#C9C9C9"
                    placeholder="Email Address"
                    keyboardType="default"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'The email field must be required.'
                  },
                  maxLength: {
                    value: 255,
                    message: 'The email field accepts a maximum of 255 caracters.'
                  },
                }}
              />
            </View>
            <Text style={styles.error}>{errors.email?.message}</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.icon}
                name="lock-closed-outline"
                color="#C9C9C9"
                size={15}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholderTextColor="#C9C9C9"
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry={showPassword}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'The password field must be required.'
                  },
                  minLength: {
                    value: 8,
                    message: 'The password field accepts a minimum of 8 caracters.'
                  },
                }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  style={styles.icon}
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  color="#C9C9C9"
                  size={15}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.error}>{errors.password?.message}</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.icon}
                name="lock-closed-outline"
                color="#C9C9C9"
                size={15}
              />
              <Controller
                control={control}
                name="password_confirmation"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    placeholderTextColor="#C9C9C9"
                    placeholder="Password Confirmation"
                    keyboardType="default"
                    secureTextEntry={showPassword}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'The password confirmation field must be required.'
                  },
                  minLength: {
                    value: 8,
                    message: 'The password confirmation field accepts a minimum of 8 caracters.'
                  },
                }}
              />
            </View>
            <Text style={styles.error}>{errors.password_confirmation?.message}</Text>
            <TouchableOpacity
              style={styles.registerTouch}
              disabled={!isValid}
              activeOpacity={0.7}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelTouch} onPress={() => navigation.goBack()}>
              <Text style={styles.cancelText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}