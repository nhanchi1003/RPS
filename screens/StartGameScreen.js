//==== Thenhan Ngo ====

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../constants/Colors';
import Header from '../components/Header';

const StartGameScreen = props => { 
  
  const confirmPlayGame = () => {    
    props.onPlayGameClicked();
  };

  const Images = [    
    require('../assets/Game_Rules_1.png')    
  ];  

 //========================= Launching screen ====================================
  return (          
      <View style={styles.screen}>       

         {/************************ Game Name ******************************/}
        <View style={{ width: '100%', height:'13%', justifyContent: 'center'}}>        
            <Header title="Rock Paper Scissors" />  
        </View>    

        {/************************* Game Rules ****************************/}
        <View style={{ width: '100%', height:'5%', justifyContent: 'center'}}>        
          <Text style={styles.gameRulesText}>Game Rules!</Text>
        </View>       
        <View style={{ width: '100%', height:'62%', justifyContent: 'center'}}>  
          <Image source={Images[0]} style={styles.gameRulesImage}/>      
        </View>
        
        {/********************* Play Game Button ***************************/}
        <View style={{ width: '100%', height:'20%', justifyContent: 'center'}}>
          <Text style={styles.promptText}>
              Touch the "Play Game" button to play!
          </Text>
          <View style={styles.playGameButtonContainer}>              
            <TouchableOpacity style={styles.playGameButton} 
                              onPress={confirmPlayGame}>                 
	            <Text style={styles.playGameButtonText}>Play Game</Text>
            </TouchableOpacity>
          </View> 
        </View>

      </View>   
  );
};//======================== end of Launching screen =============================

const styles = StyleSheet.create({
  screen: {  
    padding: 0,  
    width: '100%',
    height:'100%', 
    //backgroundColor: 'red'          // Used for testing the layout purpose
  },
  gameRulesImage: {    
    width: '95%',
    height: '95%',   
    alignSelf: 'center', 
    resizeMode: 'contain' 
  },
  gameRulesText: {
    fontSize: 25,   
    fontWeight: 'bold',    
    textAlign: 'center',
    color: Colors.gameRules    
  },
  promptText: {
    fontSize: 20,   
    fontWeight: 'bold',    
    textAlign: 'center',
    color: Colors.gameNameHeaderText,    
    paddingBottom: 10
  },
  playGameButtonContainer: {
    width: '32%',
    alignSelf: 'center'
  },    
  playGameButton: {        
    alignItems: 'center',
    backgroundColor: Colors.rightButton,
    padding: 14,        
    borderRadius: 20
  },  
  playGameButtonText: {
    fontSize: 18,   
    fontWeight: 'bold',
    color: Colors.gameNameHeaderText,
    textAlign: 'center'
  }
});

export default StartGameScreen;
