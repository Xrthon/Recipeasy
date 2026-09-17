import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginForm} from './screens/LoginForm';
import { SignUpForm} from './screens/SignUpForm';
import { RecipesView} from './screens/RecipesView';

import { RecipesForm} from './screens/RecipesForm/RecipesForm';
import { globalStyles } from './components/styles/global.styles';

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator style={globalStyles.mainContainer} initialRouteName="LoginForm">
        <Stack.Screen
          name="LoginForm"
          component={ LoginForm }
        />
        <Stack.Screen 
          name="SignUpForm" 
          component={ SignUpForm } 
        />
        <Stack.Screen 
          name="RecipesForm" 
          component={ RecipesForm } 
        />

        <Stack.Screen 
          name="RecipesView" 
          component={ RecipesView } 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
