import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const PresBack = () => {

      const [people, setPeople] = useState([
        { name:'Date of Prescription: 20 july 2023  ', id: '1' },
       
        
      ]);
    
      return (
        <View style={styles.container}>
            {
                
                people.map((item) => {
                    
                    return(
                      
                        <View key={item.id}>
                             <Text style={{ color: 'white', fontSize: 20, marginBottom: 40 }}>Prescriptions List</Text>
                            <Text style= {styles.item}>{item.name}</Text>
                            
                        </View>
                    )
                    })}
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 80,
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
            name: {
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
              },
              separator: {
                height: StyleSheet.hairlineWidth,
                backgroundColor: 'rgba(0, 0, 0, .08)',
              },
              listEmpty: {
                height: Dimensions.get('window').height,
                alignItems: 'center',
                justifyContent: 'center',
              },
              listItem: {
                height: 200,
                width: Dimensions.get('window').width / 2 - 16,
                backgroundColor: 'white',
                margin: 8,
                borderRadius: 10,
              },
            shadowOpacity:.3,
            shadowRadius:30,
            padding:15,
            fontSize: 18,
          },

       
      });
    
    

export default PresBack;