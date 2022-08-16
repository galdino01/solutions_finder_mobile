import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/Ionicons";

import Header from "../../components/Header";
import Post from "../../components/Post";
import styles from "./styles";

import api from "../../services/api";
export default function UserProfile() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [userToken, setUserToken] = useState();
  const [posts, setPosts] = useState();
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    async function getUserToken() {
      try {
        const temp = await AsyncStorage.getItem('token');
        if (temp && temp.length > 0) {
          setUserToken(temp);
        }
      } catch (error) {}
    }
    getUserToken();
    getPosts();
  }, [])

  setTimeout(() => {
    getPosts();
  }, 2000)

  function openAlert() {
    setAlertIsOpen(!alertIsOpen);
    Alert.alert(
      `${ auth.loggedUserData.nickname }`,
      "Do you want to leave?",
      [
        {
          text: "Cancel",
          style: styles.cancel,
          onPress: () => setAlertIsOpen(false),
        },
        {
          text: 'Logout',
          style: styles.logout,
          onPress: () => logout(),
        }
      ]
    )
  }

  function getPosts() {
    api.get('/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    })
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function closeModal() {
    setModal(false);
    setTitle("");
    setText("");
  }

  function buildPost() {
    const aNewPost = {
      user_id: auth.loggedUserData.id,
      nickname: auth.loggedUserData.nickname,
      title: title,
      text: text,
    }
    api.post('/post/create', aNewPost)
    .then((response) => {
      Alert.alert(
        `${response.data.res}`,
        "",
        [
          {
            text: 'Close',
            style: styles.logout,
            onPress: () => closeModal(),
          }
        ]
      );
    })
    .catch((error) => {
      console.log(error);
      closeModal()
    });
  }


  function logout() {
    api.post('/auth/logout', {
      headers: {
        'Authorization': `Bearer ${userToken}`,
      }
    })
    .then((response) => {
      dispatch({ type: 'LOGGED_USER_DATA', payload: null });
      dispatch({ type: 'USER_EMAIL_AND_PASS', payload: null });
      dispatch({ type: 'GET_USERS', payload: null });
      AsyncStorage.clear();
      Alert.alert(response.data.res);
      setAlertIsOpen(false);
      navigation.navigate('GettingStarted');
    })
    .catch((error) => {
      console.log(error);
      setAlertIsOpen(false);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header color="#1A1A1A" />
        <TouchableOpacity 
          style={styles.userNickName}
          onPress={() => openAlert()}
        >
          <Icon 
            name="person-circle-outline"
            color="#1A1A1A"
            size={15}
          />
          <Text>{ auth.loggedUserData.nickname }</Text>
          <Icon 
            name={ alertIsOpen ? "caret-down-outline" : "caret-forward-outline"}
            color="#1A1A1A"
            size={10}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.userData}>
        <Text style={styles.label}>Name: <Text style={styles.info}>{ auth.loggedUserData.name }</Text></Text>
        <Text style={styles.label}>Last Name: <Text style={styles.info}>{ auth.loggedUserData.last_name }</Text></Text>
        <Text style={styles.label}>Email: <Text style={styles.info}>{ auth.loggedUserData.email }</Text></Text>
      </View>
      <View style={styles.userPostsHeader}>
        <Text style={styles.titleText}>All Posts</Text>
        <TouchableOpacity
          style={styles.newPost}
          onPress={() => setModal(true)}
        >
          <Text style={styles.newPostText}>New Post</Text>
          <Icon
            name="add-outline"
            color="#1A1A1A"
            size={15}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={posts}
          keyExtractor={(item) => { item.id }}
          renderItem={({item}) => <Post nickname={item.nickname} title={item.title} text={item.text} created_at={item.created_at} />}
        />
      </View>
      <Modal transparent={true} animationType="slide" visible={modal}>
        <View style={styles.modalContainer}>
          <View style={styles.form}>
            <View style={styles.signUpArea}>
              <Text style={styles.title}>New Post</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => setTitle(value)}
                  value={title}
                  placeholderTextColor="#C9C9C9"
                  placeholder="Title"
                  keyboardType="default"
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => setText(value)}
                  value={text}
                  placeholderTextColor="#C9C9C9"
                  placeholder="Text"
                  keyboardType="default"
                />
              </View>
              <TouchableOpacity
                style={styles.registerTouch}
                activeOpacity={0.7}
                onPress={() => buildPost()}
              >
                <Text style={styles.registerText}>POST</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelTouch} onPress={() => closeModal(false)}>
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}