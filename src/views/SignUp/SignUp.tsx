import React, {useState} from "react";
import {Button, Text, TextInput, View} from 'react-native';

import ISignUp from "./type";
import styles from "../../styles";

const SignUp: React.FC<ISignUp> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    console.log("send request to firebase for sign up");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
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
        title="S'inscrire"
      />
    </View>
  );
};

export default SignUp;
