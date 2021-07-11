import React, {useContext, useState} from 'react';
import {TextInput,TouchableOpacity,View,Button,ScrollView,StyleSheet,Text,} from 'react-native';
import {UserContext} from '../ContextApi';

export default function Places({navigation}) {
  const index = navigation.getParam('index');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const {userData} = useContext(UserContext);
  const [data, setData] = userData;
  const updateLocation = () => {
    alert('Location name and info added successfully!');
    navigation.navigate('Cities');
    data[index].locations.push({name: name, info: info});
    setData(data);
  };

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title={'Back'} onPress={() => navigation.navigate('Cities')} />
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black',}}>
          {data[index].city}
        </Text>
        <View/>
      </View>
      <View>
        {data[index].locations.length > 0 ? (
          data[index].locations.map((value, index) => (
            <View key={index}>
              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 5,
                }}>
                <Text>{value.name}</Text>
                <Text>{value.info}</Text>
              </View>
            </View>
          ))
        ) : (

          <Text style={{color:'black', alignItems: 'center',}}>No location for this city added</Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Location Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location Info"
        onChangeText={text => setInfo(text)}
      />
      	<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.button} onPress={updateLocation}>Add Location</Text>
			</TouchableOpacity>
     
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor:'#08c489',
  },

  input: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    borderColor:'black',
  },

  scrollview: {
    width: '100%',
    height: '100%',
        backgroundColor:'#08c489',
  },
  
  button: {
    marginLeft: 50,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#04855c',
    padding: 10,
    width: 130,
    height: 50,
    fontSize: 18,
  },
});