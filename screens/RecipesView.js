import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { HyperLink } from "../components/HyperLink.js";
import {
  SubmitButton,
  submitButtonStyles,
} from "../components/SubmitButton.js";
import { Field } from "../components/Field.js";
import { globalStyles } from "../components/styles/global.styles.js";

export function RecipesView({ navigation, route }) {
  const [recipesList, setRecipeList] = useState([]);

  const params = route.params;

  const randomRecipe = () =>
    recipesList[Math.floor(Math.random() * recipesList.length)];

  useEffect(() => {
    if (params) {
      const recipe = {
        category: params.type,
        name: params.name,
        durationHours: params.timer?.hours,
        durationMinutes: params.timer?.minutes,
        description: params.description,
      };
      setRecipeList((previous) => [...previous, recipe]);
    }
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HyperLink text={"log out"} popToTop={true} />,
      headerBackVisible: false,
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Text>{JSON.stringify(recipesList)}</Text>

      {recipesList.length > 0 && (
        <SubmitButton
          text="View"
          params={randomRecipe()}
          navigateTo={"RecipeForm"}
        />
      )}

      <SubmitButton
        text={"+"}
        style={submitButtonStyles.cornerRight.box}
        textStyle={submitButtonStyles.cornerRight.text}
        navigateTo={"RecipeForm"}
      />
    </View>
  );
}
