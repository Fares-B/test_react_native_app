import {StyleSheet} from "react-native";

const colors = {
  light: '#fff',
  dark: '#333'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: colors.dark,
  }
});

export default styles;
