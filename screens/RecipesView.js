import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { HyperLink, hyperLinkStyles } from "../components/HyperLink.js";
import { SubmitButton,submitButtonStyles } from "../components/SubmitButton.js";
import { globalStyles } from "../components/styles/global.styles.js";

export function RecipesView({ navigation, route }) {

  const [recipesList, setRecipeList] = useState([]);

  //Se poser la question si Une vari.  selectedRecipe(useState) a vraiment lieu d'être
  const [selectedRecipe, setSelectedRecipe] = useState();

  const params = route.params;

  //Retravailler la logique de generation d'une recette aleatoire 
  const randomRecipe = () => {
    const recipe = recipesList[Math.floor(Math.random() * recipesList.length)];
    setSelectedRecipe(recipe);
  };

  useEffect(() => {
    if (params) {
      const recipe = {
        category: params.type,
        name: params.name,
        durationHours: params.timer?.hours,
        durationMinutes: params.timer?.minutes,
        description: params.description,
      };
      setRecipeList((previous) =>
        [...previous, recipe].sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HyperLink
          text={"log out"}
          textStyle={hyperLinkStyles.logout}
          popToTop={true}
        />
      ),
      headerBackVisible: false,
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Text>{JSON.stringify(recipesList)}</Text>

     
      {recipesList.length > 0 && (
        <SubmitButton
          text="View"
          //Retravailler l'execution de fonction sur le clique du bouton pour calculer les params 
          onBeforeNavigation={randomRecipe}
          // Enlever le mode edit pour constater qu'il a une recette ou pas de recette 
          params={{ recipe: selectedRecipe, mode: "edit" }}
          navigateTo={"RecipeForm"}
        />
      )}

      <SubmitButton
        text={"+"}
        style={submitButtonStyles.cornerRight.box}
        textStyle={submitButtonStyles.cornerRight.text}
        // Enlever le mode add pour constater qu'il pas de recette donc mode add 
        params={{ mode: "add" }}
        navigateTo={"RecipeForm"}
      />
    </View>
  );
}
