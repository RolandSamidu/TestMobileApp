import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Details = () => {

      const [people, setPeople] = useState([
        { name:'     Dogastrol   40mg \n\t  ', key: '1' },
        { name:'   Menison   50mg\n\t', key: '2' },
        { name:'    Dorithricin   100mg\n\t ', key: '3' },
       
        
      ]);


      const navigation = useNavigation();

  // Function to navigate to the target screen when the image is clicked
  const navigateToTargetScreen = () => {
    navigation.navigate('GMapBack'); // Replace 'TargetScreen' with the name of your target screen
  };

    
      return (
        <View style={styles.container}>
          <Text style={{ color: 'white', fontSize: 20, marginBottom: 40 }}>Medicines List</Text>
            {   
                people.map((item) => {
                    return(
                        <View key={item.key}>  
                            <Text style= {styles.item}>
                            
                            {item.name}
                            <Text style={{ color: 'black', fontSize: 11, fontStyle:"italic"}}>Morning 1  | Afternoon 1 | Eveniing 1                  </Text>
                            
                            <TouchableOpacity onPress={navigateToTargetScreen}>
                            <Image
        source={require("../assets/med1.png")}
        style={{ width: 100, height: 100}}
      />
     </TouchableOpacity>

     <Text style={{ color: 'black', fontSize: 11, fontStyle:"italic", color:"blue"}}> See more.. </Text>
                            </Text>
                        </View>     
                    )
                    })}

<TouchableOpacity onPress={navigateToTargetScreen}>
                            <Image
        source={require("../assets/findpharmacy.png")}
        style={{ width: '100%', height: 50, borderRadius: 20}}
      />
     </TouchableOpacity>
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 40,
          paddingHorizontal: 40,
          width: '100%',  
                
        },

        item: {
            flexDirection: 'row',
            marginBottom: 30,
            borderRadius: 10,
            backgroundColor: '#fff',
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10,
                
            },
            shadowOpacity:.3,
            shadowRadius:30,
            padding:15,
            fontSize: 15,
          },

       
      });
    
    

export default Details;