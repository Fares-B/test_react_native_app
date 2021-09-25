import React, {useState} from "react";
import {Button, Text, TextInput, View} from 'react-native';

import ISignIn from "./type";
import styles from "../../styles";

const SignIn: React.FC<ISignIn> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    console.log("send request to firebase for sign in");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        textContentType="password"
      />
      <Button
        onPress={onSubmit}
        title="Connexion"
      />
    </View>
  );
};

export default SignIn;
