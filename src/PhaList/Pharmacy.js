import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Pharmacy = () => {

      const [people, setPeople] = useState([
        { name:'     Dogastrol   40mg \n\t  ', key: '1' },
      
      ]);


      const navigation = useNavigation();

  // Function to navigate to the target screen when the image is clicked
  const navigateToTargetScreen = () => {
    navigation.navigate('MrdicineBack'); // Replace 'TargetScreen' with the name of your target screen
  };

    
      return (
        <View style={styles.container}>
          <Text style={{ color: 'white', fontSize: 20, marginBottom: 40 }}>Pharmacies List</Text>
            {  
                people.map((item) => {
                    return(
                        <View key={item.key}>  
                            <Text style= {styles.item}>
                            <TouchableOpacity onPress={navigateToTargetScreen}>
                            <Image
        source={require("../assets/p2.png")}
        style={{ width: 100, height: 100}}
      />
      
<Text style={{ color: 'black', fontSize: 10, marginBottom: 20 }}></Text>

<View>
<TouchableOpacity onPress={navigateToTargetScreen}> 
      <Button
        title="+Add Medicines"
        onPress={(navigateToTargetScreen)}
      />
        </TouchableOpacity>
    </View>
     </TouchableOpacity>
     <Text style={{ color: 'black', fontSize: 20, marginBottom: 40 }}> ____________________________________</Text>
     <Text style={{ color: 'black', fontSize: 20, marginBottom: 40 }}> Sahana Suwa Pharmacy               </Text>
     <Text style={{ color: 'black', fontSize: 12 }}>    Email: sahana@gmail.com  | Phone: +94 11 564 7389</Text>
     <Text style={{ color: 'green', fontSize: 12 }}> Opened                                      </Text>
     <Image
        source={require("../assets/rating.png")}
       
      />
                            </Text>
                        </View>     
                    )
                    })}
{   
                people.map((item) => {
            
                    return(
                        <View key={item.key}>  
                            <Text style= {styles.item}>
                                   <TouchableOpacity onPress={navigateToTargetScreen}> 
                            <Image
        source={require("../assets/p1.png")}
        style={{ width: 100, height: 100}}
        
      />
           <Text style={{ color: 'black', fontSize: 10, marginBottom: 20 }}></Text>
<View>
      <Button
        title="+Add Medicines"
        onPress={(navigateToTargetScreen)}
      />
    </View>
     </TouchableOpacity>



     <Text style={{ color: 'black', fontSize: 20, marginBottom: 40 }}> ____________________________________</Text>
     <Text style={{ color: 'black', fontSize: 20, marginBottom: 40 }}> Osulka Pharmacy Pharmacy               </Text>
     <Text style={{ color: 'black', fontSize: 12 }}>   Email: osulka@gmail.com  | Phone: +94 76 234 7349   </Text>
     <Text style={{ color: 'red', fontSize: 12 }}> Closed                                     </Text>
     <Image
        source={require("../assets/rating1.png")}
       
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
          paddingHorizontal: 10,
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
    
    

export default Pharmacy;