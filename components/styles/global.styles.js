import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#367E7F',
    flex: 1,
    gap: 16,
    padding: 16,
  },
  centerScreenContainer: {
    backgroundColor: '#367E7F',
    flex: 1,
    gap: 16,
    padding: 16,
    justifyContent: "center",
  },
  mainContainer:{
    flex: 1,
    display: "flex",
  },
  noalign: {
    alignItems : '',
    justifyContent: 'flex-start',
  }
});
