import React from "react";
import {Pressable, Text} from 'react-native';

import ILink from "./type";
import styles from "../../styles";

const Link: React.FC<ILink> = ({navigation, text, navigateTo}) => {

  return (
    <Pressable
      onPress={() => navigation.navigate(navigateTo)}
    >
      <Text style={styles.link}>{text}</Text>
    </Pressable>
  );
};

export default Link;
