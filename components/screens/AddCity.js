import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function AddCity({navigation}) {
	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const handleClick = () => {
		alert('Country and its city added successfully!');
		const pushedData = {country: country, city: city, locations: []};
		setData(data => [pushedData, ...data]);
	}
	return (
		<View style={styles.container}>
    <Text style={styles.secondhead}>    Tour App </Text>
			<Text style={styles.secondhead}>  Country Name </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCountry(text)}
			
			/>
			<Text style={styles.secondhead}>     City Name </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCity(text)}
			
			/>
			<TouchableOpacity
				style={styles.button}
			>
				<Text style={styles.head} onPress={handleClick}>Add city</Text>
        
			</TouchableOpacity>
      
			<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.head} onPress={() => navigation.navigate('Cities')}>View list</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 24,
    backgroundColor: '#08c489',
  },
  
  input: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    color: 'black',
    borderColor: 'black',
  },
  
  button: {
    alignItems: 'center',
    backgroundColor: '#04855c',
    padding: 10,
    width: 110,
    marginRight: 150,
    marginTop: 40,
  },
  
  footbutton: {
    marginLeft: 150,
    marginTop: -50,
    alignItems: 'center',
    backgroundColor: '#04855c',
    padding: 10,
    width: 110,
    height: 50,
  },

  head: {
    marginBottom: 5,
    color: 'black',
    fontSize: 18,
 },

  secondhead: {
   color: 'black',
    fontSize: 18,
    width: 140,
    fontWeight:'bold',

 },
 
});