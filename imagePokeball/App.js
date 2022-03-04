import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Image source={{
            uri: 'https://3.bp.blogspot.com/-lfuJuZ4ex00/VxTxWdXNBgI/AAAAAAAAC7Q/OytAhcw5yrweTI8cDNNZ1gNrp6gaFsZTgCLcB/s776/Red_Charizard_PO.png',
          }}
          style={{
            width: 450, 
            height: 450, 
          }}
        />
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        color: '#000000',
        width: 450,
        height: 50,
        backgroundColor: '#D2691E'
      }}>
      Charizard
      </Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'left',
        color: '#000000',
        width: 450,
        height: 40,
        backgroundColor: '#E8E8E8'
      }}>
          Power: 50               Age: 20             Legendary    
      </Text>
      <Image source={{
            uri: 'https://wallpapercave.com/wp/oTjHWsu.jpg',
          }}
          style={{
            width: 450, 
            height: 130, 
          }}
        />
    </ScrollView>
  );
}

export default App;