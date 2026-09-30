import { View, Alert } from "react-native";
import { useState, useEffect } from "react";
import { RecipieRadioGroup } from "./RadioGroup.js";
import { Field, fieldStyles } from "../../components/Field.js";
import { TimerField } from "../../components/TimerField.js";
import { globalStyles } from "../../components/styles/global.styles.js";
import { SubmitButton } from "../../components/SubmitButton.js";
export function RecipeForm({ navigation, route }) {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    timer: null,
    type: null,
  });
  const [errors, setError] = useState({
    name: null,
    description: null,
    timer: null,
    type: null,
  });

  const params = route.params;
  useEffect(() => {
    if (params) {
      console.log(params);
      const duration = {
        hours: params.durationHours,
        minutes: params.durationMinutes,
      };
      setRecipe({
        name: params.name,
        timer: duration,
        description: params?.description,
        type: params.category,
      });
    }
  }, [params]);

  const recipeParams = () => recipe;
  const handleSave = () => {
    const newErrors = {};

    if (recipe.name.trim() == "")
      newErrors.name = "La recette doit avoir un nom";
    if (recipe.timer == null) {
      newErrors.timer = "La recette doit avoir une durée";
    } else if (recipe.timer.hours <= 0 && recipe.timer.minutes <= 0) {
      newErrors.timer = "La recette doit avoir une durée plus grande que 0";
    }
    if (recipe.type == null) {
      newErrors.type = "Choisis un type de repas";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      Alert.alert("Error", JSON.stringify(errors));
      return false;
    }
  };

  return (
    <View style={globalStyles.container}>
      <RecipieRadioGroup
        selectedId={recipe.type}
        setSelectedId={(label) => setRecipe({ ...recipe, type: label })}
      />

      <Field
        label="Name"
        value={recipe.name}
        onChangeText={(text) => setRecipe({ ...recipe, name: text })}
      />

      <TimerField
        duration={recipe.timer}
        setDuration={(duration) => setRecipe({ ...recipe, timer: duration })}
      />

      <Field
        label="Description"
        style={fieldStyles.textArea}
        multiline={true}
        value={recipe.description}
        onChangeText={(text) => setRecipe({ ...recipe, description: text })}
      />
      <SubmitButton
        text="Save"
        params={recipeParams()}
        popTo="RecipesView"
        onBeforeNavigation={handleSave}
      />
    </View>
  );
}
