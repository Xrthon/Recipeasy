import {View} from 'react-native'; 
import {useState} from 'react'
import {RecipieRadioGroup} from './RadioGroup.js'
import { Field,fieldStyles } from '../../components/Field.js';
import {TimerField} from '../../components/TimerField.js'
import {globalStyles} from '../../components/styles/global.styles.js'
import {SubmitButton} from '../../components/SubmitButton.js'

export function RecipeForm(){

    const [recipe, setRecipe] = useState({
        name:"", 
        description:"",
        timer:null,
        type: null

    })

    //Pas d'acolade pour un retour direct 
    const recipeParams= () => JSON.stringify(recipe)

 
    return (
        <View style={globalStyles.container} > 

            <RecipieRadioGroup 
                selectedId={recipe.type} 
                setSelectedId={ ((label) => setRecipe({...recipe,type:label})) } 
            />
            <Field 
                label="Name" 
                value={recipe.name} 
                onChangeText={ (text) => setRecipe({...recipe, name:text})}
            />
            
            <TimerField 
                duration={recipe.timer} 
                setDuration={(duration) => setRecipe({...recipe, timer:duration})} 
            />

            <Field label="Description"
                style={fieldStyles.textArea}
                multiline={true}
                value={recipe.description}
                onChangeText={ (text) => setRecipe({...recipe, description:text}) }
            />
            <SubmitButton text="Save" params={recipeParams()} navigateTo={"RecipesView"}/>
        </View>
    ) 
}