//==== Thenhan Ngo ====

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Colors from '../constants/Colors';
import NavBar from '../components/NavBar';

const HistoryScreen = props => {     

  // When the "Continue Playing" button is clicked, the Player will be ...
  //... returned to the "GamePlayingScreen" to continue the game.
  const confirmContinueToPlay = () => {
    // No need to pass these below parameters back to "GamePlayingScreen".
    // props.onBackToPlayClicked(props.totalComputerWin, props.totalPlayerWin, 
    //                          props.totalDraw, props.listHistory,
    //                          props.computerWeapon, props.playerWeapon,
    //                          props.winDraw);
    props.onBackToPlayClicked();
  };
  
  // When the "Start Over" button is clicked, these parameters will sent to...
  //... the "GameScreens" then send them to "StartGameScreen" when the ...
  //... "StartGameScreen" is activated.
  const confirmStartOver = () => {     
    props.onStartOver(0, 0, 0, [], 3, 3, "WELCOME!");   
  };
  
  // A way to handle the "<" character
  let ContPlayingButtonText = "< Continue Playing"

  //============================ History Screen ===================================
  return (          
      <View style={styles.screen}>       
       
        {/******************** Navigation Bar ***************************/}
        <NavBar>
          <View style={styles.navBarContainer}>
            <View style={[styles.buttons, styles.leftButton]}>  
              <TouchableOpacity onPress={confirmContinueToPlay}>  
                {/*onPress={props.onBackToPlayClicked}*/}     
	              <Text style={[styles.buttonsText, styles.leftButtonText]}>
                      {ContPlayingButtonText}</Text>         
              </TouchableOpacity>                
            </View>
            <View style={[styles.buttons, styles.rightButton]}>              
              <TouchableOpacity onPress={confirmStartOver}>                    
	              <Text style={[styles.buttonsText, styles.leftButtonText]}>START OVER</Text>         
              </TouchableOpacity>  
            </View>                  
          </View>       
        </NavBar>  

        {/************************* Results Board *************************/}
        <View style={styles.resultsBoard}>        
          <Text style={[styles.score, styles.computerScore]}>
                Computer: {props.totalComputerWin}
          </Text>
          <Text style={[styles.score, styles.playerScore]}>Player: {props.totalPlayerWin}</Text>
          <Text style={[styles.score, styles.drawScore]}>Draw: {props.totalDraw}</Text>
          <Text style={[styles.score, styles.totalPlayed]}>
                Total Played: {props.totalComputerWin + props.totalPlayerWin + 
                props.totalDraw}
          </Text>
        </View>

        {/************************* Play History ************************/}
        <View>        
          <Text style={styles.playHistoryText}>Play History</Text>          
        </View>

        {/********************* Play History List ************************/}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={props.listHistory}
          renderItem={itemData => (
          <View style={styles.listHistoryItems}>
            <Text style={styles.historyItem}>{itemData.item.value}</Text>
          </View>
          )}
        />

      </View>   
  );
};//======================= end of History Screen ================================

const styles = StyleSheet.create({
  screen: {
    flex: 1,         //Without this, the history FlatList will not show all items
    width: '100%',    
    alignSelf: 'center'
  },  
  navBarContainer: {
    flexDirection: 'row',             
    justifyContent: 'space-between',      
  },
  buttons: {        
    alignItems: 'center',   
    padding: 14,        
    borderRadius: 10
  },
  leftButton: {   
    backgroundColor: Colors.leftButton    
  }, 
  rightButton: {    
    backgroundColor: Colors.rightButton    
  }, 
  buttonsText: {
    fontSize: 18,   
    fontWeight: 'bold',   
    textAlign: 'center'
  },   
  leftButtonText: {    
    color: Colors.gameNameHeaderText    
  },  
  rightButtonText: {    
    color: Colors.gameNameHeaderText    
  },  
  resultsBoard: {
    flexDirection: 'row',
    width: '100%',         
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  score: {
    fontSize: 14,   
    fontWeight: 'bold',    
    textAlign: 'center',        
    padding: 8    
  },
  computerScore: {    
    color: Colors.computer    
  },
  playerScore: {    
    color: Colors.player    
  },
  drawScore: {    
    color: Colors.draw    
  },
  totalPlayed: {    
    color: Colors.totalPlayed
  },
  playHistoryText: {
    fontSize: 23,   
    fontWeight: 'bold',    
    textAlign: 'center',
    color: Colors.gameNameHeaderText,
    padding: 5,    
  },
  listHistoryItems: {
    width: '90%', 
    padding: 4,
    marginVertical: 2,
    backgroundColor: '#ccc',
    borderColor: Colors.historyItemBorder,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 30/2,      
  },
  historyItem: {
    fontSize: 15,   
    fontWeight: 'bold',        
    color: Colors.history,    
    paddingLeft: 50    
  },
});

export default HistoryScreen;
