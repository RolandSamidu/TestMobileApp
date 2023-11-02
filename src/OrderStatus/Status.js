import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Status = () => {

      const [people, setPeople] = useState([
        { name:'\nIssued Date: 20th July 2023                          ', key: '1' },

       
        
      ]);


      const navigation = useNavigation();

  // Function to navigate to the target screen when the image is clicked
  const navigateToTargetScreen = () => {
    navigation.navigate('DetailBack'); // Replace 'TargetScreen' with the name of your target screen
  };

    
      return (
        <View style={styles.container}>
          <Text style={{ color: 'white', fontSize: 20, marginBottom: 40 }}>Upload Prescription   </Text>
            {   
                people.map((item) => {
                    return(
                        <View key={item.key}>  
                            <Text style= {styles.item}>
                            <Text style={{ color: 'black', fontSize: 15, fontStyle:"italic"}}>NOT COMPLETED</Text>
                          
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
    
    

export default Status;