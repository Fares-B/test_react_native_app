import React, {useEffect, useState} from "react";
import {Button, FlatList, Text, TextInput, View} from 'react-native';

import IHome from "./type";
import styles from "../../styles";
import firebase from "firebase";


const Home: React.FC<IHome> = ({navigation}) => {
  const [list, setList] = useState<string[]>([]);
  const [userId, setUserID] = useState<string|undefined>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user?.uid) return;
      setUserID(user.uid);
      firebase.database().ref(`/list`).child(user.uid).once("value", snapshot => {
        setList(snapshot.val())
      });
    })
  }, []);

  const onSubmit = (): void => {
    if (!userId) return;
    const ref = firebase.database().ref(`/list`);
    ref.child(userId).set(list);
  }

  const InputItem: React.FC<any> = ({item, index}) => {
    return (
      <TextInput
        style={styles.input}
        value={list[index]}
        onChangeText={(text) => {
          const newList = [...list];
          newList[index] = text;
          setList(newList);
        }}
        placeholder="Nouvelle entrée"
      />
    );
  }

  return (
    <View style={styles.container}>
      {list.length <= 0
        ? <Text style={styles.container}>Ajouter un input avec le bouton 1</Text>
        : <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={InputItem}
        />
      }
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Button
          title="2"
          onPress={onSubmit}
        />
        <Button
          title="1"
          onPress={() => setList([...list, ""])}
        />
      </View>
    </View>
  );
};

export default Home;
