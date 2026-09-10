import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap:16,
    padding:16,
    backgroundColor: '#367E7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer:{
    display: "flex",
    width : "100%",
    height : "100%",

  },
  noalign: {
    alignItems : '',
    justifyContent: 'flex-start',
  }
});
