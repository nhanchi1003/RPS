
//==== Thenhan Ngo  ====

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';

// When the app is launched, the "StartGameScreen" is the first screen appeared 
import StartGameScreen from './screens/StartGameScreen';

// The GameScreens will handle the second screen, the "GamePlayingScreen" and 
// the third screen, the "HistoryScreen"
import GameScreens from './screens/GameScreens';

// Some reusuable colors
import Colors from './constants/Colors';

// *********** The main APP
export default function App() {
  // Setting up game control parameter    
  const [gameScreensActivated, setGameScreensActivated] = useState();   //Boolean Value

  const startGameHandler = () => {     
    setGameScreensActivated(1);
  };  
  
  let content = <StartGameScreen onPlayGameClicked={startGameHandler}/>
  
  if (gameScreensActivated) {     
    content = <GameScreens               
              computerRPSinit={3}             // Initial values to pass to screens ... 
              playerRPSinit={3}               // ... when the game is played the ...
              winDrawInit={"WELCOME!"}  // ... very first time.             
              />;                  
  }

// Use to handle the phone's back button 
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  
  // ******* Screens Controller
  return (
    <View style={styles.screen}>     
      {content}		
    </View> 	
  );
}//=========================== End of Main App.js ===============================

const styles = StyleSheet.create({
  screen: {    
    width: '100%',
    height: '100%',    
    backgroundColor: Colors.mainBackground,     // Only mentioned here but all ...
  }                                             // ... screens BG will be black.
});