import * as React from "react"
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"

const GMap = () => {
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
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby: "distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details)
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421, // Zoom level
        })
      }}
      query={{
        key: "KEY",
        language: "en",
        components: "country:us",
        types: "establishment",
        radius: 30000,
        location: `${region.latitude}, ${region.longitude}`
      }}
      styles={{
        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
        listView: { backgroundColor: "white" }
      }}
    />
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

