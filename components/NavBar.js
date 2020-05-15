//==== Thenhan Ngo ====

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const NavBar = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {    
    shadowColor: Colors.draw,         //Shadow only works on iOS
    shadowOffset: { width: 0, heigh: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 9,             //elevation is alternative shadow on Android
    backgroundColor: Colors.headerBackgound,
    paddingBottom: 3,  
    paddingTop: 26,
    paddingHorizontal: 4,       
  }
});

export default NavBar;