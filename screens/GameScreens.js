//==== Thenhan Ngo ====

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import StartGameScreen from './StartGameScreen';

// When the Player clicks the "Play Game" button, the "GamePlayingScreen" appeared
import GamePlayingScreen from './GamePlayingScreen';

// When the Player clicks the "History" button, the "HistoryScreen" appeared
import HistoryScreen from './HistoryScreen';

const GameScreens = props => {
  // Screen controllers - Boolean type    
  const [gamePlayingScreenActivated, setGamePlayingScreenActivated] = useState();    
  const [historyScreenActivated, setHistoryScreenActivated] = useState(); 

  // Counting win/draw for each participant
  const [countComputerWin, setCountComputerWin] = useState(0);
  const [countPlayerWin, setCountPlayerWin] = useState(0);
  const [countDraw, setCountDraw] = useState(0);

  // The game played history
  const [history, setHistory] = useState([]);

  // 3 initial values got from App.js when GameScreens is activated
  const[computerRPS, setComputerRPS] = useState(props.computerRPSinit);
  const[playerRPS, setPlayerRPS] = useState(props.playerRPSinit);
  const[winnerDraw, setWinnerDraw]  = useState(props.winDrawInit);

  // This "StartGAmeHnadler" to handle the start of the new game per ...
  //... Player requesed after Player have played the first game, not ...
  //... from the first time launched.
  const startGameHandler2 = () => {
    setGamePlayingScreenActivated(null);    
  };  

   // When the "Back/Reset" button from the "GamePlayingScreen" is clicked, the...
   //... following parameters are reset (Do you remember the line ...
   //... "props.onBackClicked(0, 0, 0, [], 3, 3, "WELCOME!");" wrote in the ...
   //... function "const confirmBackReset"?) then activate the "StartGameScreen"...
   //... to start the new game.  
  const configureNewGameHandler = (computerWin, playerWin, draw, history2, 
                                    computerPlay, playerPlay, winnerAnounce) => { 
    setGamePlayingScreenActivated(1);   
    setCountComputerWin(computerWin);
    setCountPlayerWin(playerWin);
    setCountDraw(draw);  
    setHistory(history2); 
    setComputerRPS(computerPlay);
    setPlayerRPS(playerPlay); 
    setWinnerDraw(winnerAnounce);
  };  

   // When the "History" button from the "GamePlayingScreen" is clicked, the...
   // ... following parameters are set and activate the "HistoryScreen" to ...
   // ... receive those parameters.  
  const startHistoryHandler = (computerWin, playerWin, draw, history2, 
                               computerPlay, playerPlay, winnerAnounce) => {
    setHistoryScreenActivated(1); 
    setCountComputerWin(computerWin);
    setCountPlayerWin(playerWin);
    setCountDraw(draw); 
    setHistory(history2); 
    setComputerRPS(computerPlay);
    setPlayerRPS(playerPlay);
    setWinnerDraw(winnerAnounce);
  };

  // When the "Continue Playing" button from the "HistroryScreen" is clicked, it will ..
  // ...re-activate the "GamePlayingScreen".
  const continueGameHandler = () => {     
    setGamePlayingScreenActivated(null);
    setHistoryScreenActivated(null);        
  };  

  // When the "StartOver" button from the "histroryScreen" is clicked, it will ...
  // ...reset all weapons, counters, history then activate the "StartGameScreen"...
  // ...by deactivated the "HistoryScreen".
  const configureStartOver = (computerWin, playerWin, draw, history2, 
                              computerPlay, playerPlay, winnerAnounce) => {    
    setGamePlayingScreenActivated(1);
    setHistoryScreenActivated(null);    
    setCountComputerWin(computerWin);
    setCountPlayerWin(playerWin);
    setCountDraw(draw); 
    setHistory(history2);  
    setComputerRPS(computerPlay);
    setPlayerRPS(playerPlay);
    setWinnerDraw(winnerAnounce);
  };  

  let content2 = <GamePlayingScreen                   
                  computerWeapon={computerRPS}
                  playerWeapon={playerRPS}
                  winDraw={winnerDraw}
                  totalComputerWin={countComputerWin}  
                  totalPlayerWin={countPlayerWin}
                  totalDraw={countDraw}
                  listHistory={history}
                  onBackClicked={configureNewGameHandler} 
                  onHistoryClicked={startHistoryHandler}/>

  if (gamePlayingScreenActivated && !historyScreenActivated) {   
      content2 = <StartGameScreen                           
                  onPlayGameClicked={startGameHandler2}/>;       
  } 
  else if (historyScreenActivated) {
      content2 = <HistoryScreen                   
                  computerWeapon={computerRPS}
                  playerWeapon={playerRPS}
                  winDraw={winnerDraw}
                  totalComputerWin={countComputerWin}  
                  totalPlayerWin={countPlayerWin}
                  totalDraw={countDraw} 
                  listHistory={history}
                  onBackToPlayClicked={continueGameHandler}
                  onStartOver={configureStartOver} />;    
  } 
 
  //============================== Game Screen ====================================
  return (
    <View style={styles.screen}>     
      {content2}
    </View>
  );
}//=========================== End of Game Screen =================================

const styles = StyleSheet.create({
  screen: {        
    height: '100%'    // W/o this, the History Screen will not displayed properly!
  }
});

export default GameScreens;
