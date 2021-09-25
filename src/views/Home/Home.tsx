import React, {useEffect, useState} from "react";
import {Button, FlatList, Text, TextInput, View} from 'react-native';

import IHome from "./type";
import styles from "../../styles";
import APP_ROUTES from "../../AppRoutes";

const Home: React.FC<IHome> = ({navigation}) => {
  const [list, setList] = useState<string[]>([]);


  // useEffect(() => {
  //   if (true) {
  //     navigation.navigate(APP_ROUTES.signIn);
  //   }
  // }, [true]);

  const onSubmit = (): void => {
    console.log(list);

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
