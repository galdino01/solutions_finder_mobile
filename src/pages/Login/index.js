import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header';
import styles from './styles';

import api from './../../services/api';
export default function Login() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(true);

    const {
        handleSubmit,
        control,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur' })

    const onSubmit = data => {
        dispatch({ type: 'USER_EMAIL_AND_PASS', payload: data });
        signIn();
        Keyboard.dismiss();
    }

    function signIn() {
        api.post('/auth/login', auth.userEmailAndPass)
            .then(async (response) => {
                try {
                    dispatch({ type: 'LOGGED_USER_DATA', payload: response.data.user });
                    await AsyncStorage.setItem('token', response.data.token);
                    Alert.alert('[SUCCESS]: You logged!');
                    navigation.navigate('UserProfile');
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
                    onPress={() => Keyboard.dismiss()}
                    accessible={false}
                >
                    <View style={styles.signInArea}>
                        <Text style={styles.title}>Sign In</Text>
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
                                        message: 'The email field cannot be empty.'
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
                                        message: 'The password field cannot be empty.'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'The password field accepts a minimum of 8 caracters.'
                                    }
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
                        <View style={styles.newAccountView}>
                            <Text style={styles.newAccountText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.login}
                            disabled={!isValid}
                            activeOpacity={0.7}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}