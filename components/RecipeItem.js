import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function RecipeItem(props) {
   const navigation = useNavigation();

    const icon = [
        "free-breakfast",
        "hamburger",
        "dinner-dining",
    ]

    const category_icon =() => {
        if(props.value.category == 1){
            return <MaterialIcons name={icon[0]} size={28} color="#fcba03" />
        }
        if(props.value.category == 2){
            return <MaterialCommunityIcons name={icon[1]} size={28} color="#8BC34A" />
        }
        if(props.value.category == 3){
            return <MaterialIcons name={icon[2]} size={28} color="blue" />
        }
    }


  const timeFormat = () =>`${props.value.durationHours}h${String(props.value.durationMinutes).padStart(2, '0')}`;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(props.navigateTo,{ recipe: props.value})}
    >
      <View style={styles.left}>
        {category_icon()}
        <Text style={styles.time}>{timeFormat()}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{props.value.name}</Text>
        <Text style={styles.description}>{props.value.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',     
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,     
    borderBottomColor: '#cfd8d6',
  },
  left: {
    alignItems: 'center',    
    width: 50,
    marginRight: 12,
  },
  time: {
    color: '#cfd8d6',
    fontWeight: 'bold',
    fontSize: 14,
  },
  right: {
    flex: 1,                 
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: '#cfd8d6',
    fontSize: 14,
  },
});