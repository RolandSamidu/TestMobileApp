import * as React from "react"
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GMap = () => {

  const navigation = useNavigation();

  // Function to navigate to the target screen when the image is clicked
  const navigateToTargetScreen = () => {
    navigation.navigate('PharmacyBack'); // Replace 'TargetScreen' with the name of your target screen
  };


  const [ pin, setPin ] = React.useState({
    latitude: 6.914773350285259, // Sri Lanka's latitude
    longitude: 79.97293913083745, // Sri Lanka's longitude
	})
	const [ region, setRegion ] = React.useState({
    latitude: 6.914773350285259, // Sri Lanka's latitude
    longitude: 79.97293913083745, // Sri Lanka's longitude
    latitudeDelta: 0.0922,
		longitudeDelta: 0.0421 // Zoom level
	})

  return (<View style={{ marginTop: 50, flex: 1 }}>
   <TouchableOpacity onPress={navigateToTargetScreen}>
                            <Image
        source={require("../assets/ph.png")}
        style={{ width: '100%', height: 50, borderRadius: 20}}
      />
     </TouchableOpacity>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 6.914773350285259, // Sri Lanka's latitude
        longitude: 79.97293913083745, // Sri Lanka's longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      provider="google"
    >
      <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      <Marker
        coordinate={pin}
        pinColor="black"
        draggable={true}
        onDragStart={(e) => {
          console.log("Drag start", e.nativeEvent.coordinates)
        }}
        onDragEnd={(e) => {
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          })
        }}
      >
        <Callout>
          <Text>I'm here  </Text>
        </Callout>
      </Marker>
      <Circle center={pin} radius={1000} />
    </MapView>
  </View>

  
)



}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center"
},
map: {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
}
});

export default GMap;

