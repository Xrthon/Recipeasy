import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { HyperLink, hyperLinkStyles } from "../../components/HyperLink.js";
import { SubmitButton,submitButtonStyles } from "../../components/SubmitButton.js";
import { globalStyles } from "../../components/styles/global.styles.js";
import { RecipeItem } from "./RecipeItem.js"
import { FlatList } from 'react-native';
import {StyleSheet} from 'react-native';

export function RecipesView({ navigation, route }) {

  const [recipesList, setRecipeList] = useState([
    {
      category: 1,
      name: "Le nom est beaucoup trop long pour un recette sur une ligne ",
      durationHours: 1,
      durationMinutes: 5,
      description:"La description est beaucoup trop long pour un recette sur une ligne qui devrait normalement s'afficher plus longtemps"
    },
    {
      category: 2,
      name: "Mamouth",
      durationHours: 0,
      durationMinutes: 20,
    },
    {
      category: 3,
      name: "p",
      durationHours: 0,
      durationMinutes: 20,
    }
  ]);
  const params = route.params;

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
      recipesList.length > 0 && (
        <>
          <FlatList
            data={recipesList}
            ItemSeparatorComponent={ () => <View style={{ height: 1, backgroundColor: 'white' }}/> }
            renderItem={({ item, index }) => (
              <RecipeItem navigateTo="Recipe"  value={item} />
            )}
            ListEmptyComponent={
              <Text style={[style.center, style.text ]}>No recipe yet...</Text>
            }
          />
        </>
      )}

      <SubmitButton
        text={"+"}
        style={submitButtonStyles.cornerRight.box}
        textStyle={submitButtonStyles.cornerRight.text}
        navigateTo={"Recipe"}
      />
    </View>
  );
}

const style = StyleSheet.create( StyleSheet.create({
  center: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
}))