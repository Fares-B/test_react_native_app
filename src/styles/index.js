import {StyleSheet} from "react-native";

const colors = {
  light: '#fff',
  dark: '#333',
  link: '#36a'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 10
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: colors.dark,
  },
  link: {
    paddingVertical: 10,
    color: colors.link
  }

});

export default styles;
