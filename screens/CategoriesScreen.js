import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';


function CategoriesScreen({navigation}) {
  const nav = useNavigation();
  function renderCategoryItem(itemData) {
    const pressHandler =()=>{
       navigation.navigate("Italian",{
        categoryID:itemData.item.id,
        test:1
      })
    }
    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    );
  }
    return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
// function CategoriesScreen({navigation}) {
  
//   return (
//     <FlatList
//       data={CATEGORIES}
//       keyExtractor={(item) => item.id}
//       renderItem={renderCategoryItem}
//       numColumns={2}
//     />
//   );
// }

export default CategoriesScreen;
