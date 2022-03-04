import React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#CEF6EC'
    }}>
      <Image
          source={{
            uri: 'https://picfiles.alphacoders.com/201/thumb-201718.png',
          }}
          style={{
            margin: 110,
            width: 200,
            height: 200, 
          }}
        />
        <View style={{
          marginLeft: 60,
          width: 300,
          height: 200,
          backgroundColor: '#FFFFFF'
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#000000'
          }}
          >
            Pokemon Trainer Club
          </Text>
          <TextInput
            style={{
              margin: 10,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            defaultValue="Enter your username" 
          />
          <TextInput
            style={{
              margin: 10,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            defaultValue="Enter your password"
          />
          <Button
            color= '#32CD32'
            title="Register"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
    </ScrollView>
  );
}

export default App;
