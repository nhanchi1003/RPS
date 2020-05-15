//==== Thenhan Ngo ====

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
  return (
    <View style={styles.header}>        
        <Text style={styles.headerTitle}>{props.title}</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 80, 
    paddingBottom: 30,
    backgroundColor: Colors.gameNameHeader,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: Colors.gameNameHeaderText,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Header;