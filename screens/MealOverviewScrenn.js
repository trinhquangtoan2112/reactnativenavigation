import { FlatList, StyleSheet, Text, View } from "react-native"
import {MEALS} from "../data/dummy-data" 
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";
function MealsOverViewScreen({route}){
   const catID = route.params.categoryID;
   const displayMeals = MEALS.filter(meals => meals.categoryIds.indexOf(catID)>=0);
 const renderMealItem =(data)=>{
   
    if (typeof data === 'object' && data !== null) {
        const item = data.item;
    
        const mealItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
        };
        return <MealItem {...mealItemProps}></MealItem>
    } else {
        console.log('data is not a valid object');
    }
  
   
 }
 renderMealItem()
   return (
    <View style={styles.container}>
         <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
   )
}
  const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
  })
export default MealsOverViewScreen;