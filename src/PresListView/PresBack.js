import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const PresBack = () => {

      const [people, setPeople] = useState([
        { name:'\nIssued Date: 20th July 2023                          ', key: '1' },
        { name:'\nIssued Date: 10th  December 2023                   ', key: '2' },
        { name:'\nIssued Date: 09th January 2023                        ', key: '3' },
       
        
      ]);


      const navigation = useNavigation();

  // Function to navigate to the target screen when the image is clicked
  const navigateToTargetScreen = () => {
    navigation.navigate('DetailBack'); // Replace 'TargetScreen' with the name of your target screen
  };

    
      return (
        <View style={styles.container}>
          <Text style={{ color: 'white', fontSize: 20, marginBottom: 40 }}>Prescriptions List</Text>
            {   
                people.map((item) => {
                    return(
                        <View key={item.key}>  
                            <Text style= {styles.item}>
                            <Text style={{ color: 'black', fontSize: 15, fontStyle:"italic"}}> Dr. Darshana Fernando    </Text>
                            {item.name}
                            
                            <TouchableOpacity onPress={navigateToTargetScreen}>
                            <Image
        source={require("../assets/Capsule.png")}
        style={{ width: 30, height: 30}}
      />
     </TouchableOpacity>
                        <Image
        source={require("../assets/Capsule.png")}
        style={{ width: 30, height: 30}}
      />
     
                            </Text>
                        </View>     
                    )
                    })}
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 40,
          paddingHorizontal: 20,
          width: '100%',  
                
        },

        item: {
            flexDirection: 'row',
            marginBottom: 20,
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
            fontSize: 12,
          },

       
      });
    
    

export default PresBack;