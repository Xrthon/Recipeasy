import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { HyperLink, hyperLinkStyles } from "../components/HyperLink.js";
import { SubmitButton,submitButtonStyles } from "../components/SubmitButton.js";
import { globalStyles } from "../components/styles/global.styles.js";
import { RecipeItem } from "../components/RecipeItem.js"
import { FlatList } from 'react-native';

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
      {
      recipesList.length > 0 ? (
        <>
        <FlatList
          data={recipesList}
          ItemSeparatorComponent={ () => <View style={{ height: 1, backgroundColor: 'white' }}/> }
          renderItem={({ item, index }) => (
            <RecipeItem navigateTo="RecipeForm"  value={item} />
          )}
        />
        </>
      ) : (
        <Text>No recipe yet...</Text>
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
