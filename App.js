import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginForm } from "./screens/LoginForm";
import { SignUpForm } from "./screens/SignUpForm";
import { RecipesView } from "./screens/RecipesView/RecipesView";
import { RecipeForm } from "./screens/RecipeForm/RecipeForm";
import { globalStyles } from "./components/styles/global.styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Sign Up" component={SignUpForm} />
        <Stack.Screen name="Recipe" component={RecipeForm} />

        <Stack.Screen name="Recipes" component={RecipesView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
