import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginForm} from './screens/LoginForm';
import { SignUpForm} from './screens/SignUpForm';
import { RecipesForm} from './screens/RecipesForm';
import { globalStyles } from './components/styles/global.styles';


export default function App() {
  

  return (
  <SafeAreaProvider>
    <SafeAreaView style={globalStyles.mainContainer}>
      {/* <LoginForm/> */}
      {/* <SignUpForm/> */}
      <RecipesForm/>

    </SafeAreaView>
  </SafeAreaProvider>
  );
}
