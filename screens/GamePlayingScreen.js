//==== Thenhan Ngo ====

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import NavBar from '../components/NavBar';
import Colors from '../constants/Colors'; 
  
const GamePlayingScreen = props => {  
  // The below 7 parameters were from "GameScreen"
  const [computerRPS_2, setComputerRPS_2] = useState(props.computerWeapon);   
  const [playerRPS_2, setPlayerRPS_2] = useState(props.playerWeapon);
  const [winnerMessage, setWinnerMessage] = useState(props.winDraw);    

  const [countComputer, setCountComputer] = useState(props.totalComputerWin);
  const [countPlayer, setCountPlayer] = useState(props.totalPlayerWin);
  const [countDraw, setCountDraw] = useState(props.totalDraw);

  const [resultsHistory, setResultsHistory] = useState(props.listHistory);
  
  // Counting total of played time
  let totalPlayed = countComputer + countPlayer + countDraw;     
  
  //<Image src={randomImages[Math.floor(Math.random()*randomImages.length)]}/>
  const randomImages = [
    require('../assets/Hand_Rock.png'),
    require('../assets/Hand_Paper.png'),
    require('../assets/Hand_Scissors.png'),
    require('../assets/Game_Rules_2.png')
  ];  

  // When Player hit the Rock button
  const rockButtonHandler = () => {      
    totalPlayed = totalPlayed + 1;
    decisionWinDraw(0, (Math.floor(Math.random() * 3)), totalPlayed);     
  };

  // When Player hit the Paper button
  const paperButtonHandler = () => {      
    totalPlayed = totalPlayed + 1; 
    decisionWinDraw(1, (Math.floor(Math.random() * 3)), totalPlayed);       
  };

  // When Player hit the Scissors button
  const scissorsButtonHandler = () => {         
    totalPlayed = totalPlayed + 1;  
    decisionWinDraw(2, (Math.floor(Math.random() * 3)), totalPlayed);     
  };  

  // ************** Win/Draw decision function ************************
  const decisionWinDraw = (playerRPS_2, computerRPS_2, totalPlayed) => {    
    if (((computerRPS_2 + 1) % 3) == playerRPS_2) {
      setWinnerMessage("PLAYER WINS!");
      setComputerRPS_2(computerRPS_2); 
      setPlayerRPS_2(playerRPS_2); 
      setCountPlayer(countPlayer => countPlayer + 1);        
      setResultsHistory(currentResults => [        
        { id: Math.random().toString(), value: "Play " + totalPlayed + 
              " - Player wins!" }, ...currentResults,
      ]);
    }
    else if (((playerRPS_2 + 1) % 3) == computerRPS_2) {
      setWinnerMessage("COMPUTER WINS!");
      setComputerRPS_2(computerRPS_2); 
      setPlayerRPS_2(playerRPS_2);
      setCountComputer(countComputer => countComputer + 1);       
      setResultsHistory(currentResults => [
        { id: Math.random().toString(), value: "Play " + totalPlayed + 
              " - Computer wins!" }, ...currentResults,
      ]);
    }
    else {
      setWinnerMessage("DRAW!");
      setComputerRPS_2(computerRPS_2); 
      setPlayerRPS_2(playerRPS_2); 
      setCountDraw(countDraw => countDraw + 1);      
      setResultsHistory(currentResults => [        
        { id: Math.random().toString(), value: "Play " + totalPlayed + 
              " - Draw." }, ...currentResults
      ]);
    }      
  }; // ************** End of Win/Draw decision function ***********************
    
  const confirmBackReset = () => {
     // When the "Back/Reset" button is clicked, these parameters will sent to...
     //  the "GameScreens" then send them to "StartGameScreen" when the ...
     // ... "StartGameScreen" is activated.
    props.onBackClicked(0, 0, 0, [], 3, 3, "WELCOME!");   
  };

  const confirmHistory = () => {   
    // When the "History" button is clicked, these parameters will sent to...
     //  the "GameScreens" then send them to "HistoryScreen" when the ...
     // ... "HistoryScreen" is activated.
    props.onHistoryClicked(countComputer, countPlayer, countDraw, resultsHistory, 
                           computerRPS_2, playerRPS_2, winnerMessage);   
  };

  // Special way to handle the "<" character
  let BackButtonText = "< Back / Reset "

//============================ Playing Screen ====================================
  return (
      // No style for main <View>, will be inhertited from App.js         
      <View>  
        {/*********************** 1 Navigation Bar ***********************/}
        <View style={{ height:'12%'}}>
          <NavBar>
            <View style={styles.navBarContainer}>
              <View style={[styles.buttons, styles.leftButton]}>                
                <TouchableOpacity onPress={confirmBackReset}>         
	                  <Text style={[styles.buttonsText, styles.leftButtonText]}>{BackButtonText}</Text>         
                </TouchableOpacity>  
              </View>
              <View style={[styles.buttons, styles.rightButton]}>                
                <TouchableOpacity onPress={confirmHistory}>         
	                  <Text style={[styles.buttonsText, styles.rightButtonText]}>  History  </Text>         
                </TouchableOpacity> 
              </View>
            </View>       
          </NavBar>
        </View>  

        {/************************ 2 Score Board **************************/}
        <View style={{ height:'4%', justifyContent: 'center'}}>
          <View style={styles.scoresBoard}>     
            <Text style={[styles.score, styles.computerScore]}>Computer: {countComputer}</Text> 
            <Text style={[styles.score, styles.playerScore]}>Player: {countPlayer}</Text> 
            <Text style={[styles.score, styles.drawScore]}>Draw: {countDraw}</Text> 
          </View>
        </View>
        
        {/******************** 3 Computer's Weapon *************************/}
        <View style={{ height:'5%', justifyContent: 'center'}}>
          <Text style={[styles.title, styles.titleComputer]}>COMPUTER</Text>     
        </View>
        <View style={{ height:'26%', justifyContent: 'center'}}> 
          <Image source={randomImages[computerRPS_2]} style={[styles.img, styles.imgComputer]}/>
        </View>

        {/******************* 4 Winner Anouncement ************************/}
        <View style={{ height:'6%', justifyContent: 'center'}}>
          <Text style={[styles.title, styles.titleWinner]}>{winnerMessage}</Text>   
        </View>

        {/********************* 5 Player's Weapon **************************/}
        <View style={{ height:'26%', justifyContent: 'center'}}>
          <Image source={randomImages[playerRPS_2]} style={[styles.img, styles.imgPlayer]}/>          
        </View>
        <View style={{ height:'6%'}}>          
          <Text style={[styles.title, styles.titlePlayer]}>PLAYER</Text>
        </View>

        {/***************** 6 Player's Weapon Buttons *********************/} 
        <View style={{ height:'12%', justifyContent: 'center'}}>   
          <View style={styles.buttonContainer}>
            <View style={styles.weaponButtons}>
              <TouchableOpacity onPress={rockButtonHandler}>         
                <Image source={randomImages[0]} style={styles.img}/>          
              </TouchableOpacity>    
            </View>   
            <View style={styles.weaponButtons}>
              <TouchableOpacity onPress={paperButtonHandler}>                
                <Image source={randomImages[1]} style={styles.img}/>          
              </TouchableOpacity>
            </View>
            <View style={styles.weaponButtons}>
              <TouchableOpacity onPress={scissorsButtonHandler}>                
	              <Image source={randomImages[2]} style={styles.img}/>          
              </TouchableOpacity>
            </View>
          </View>  
        </View>
        <View style={{ height:'3%', justifyContent: 'center'}}> 
          <Text style={[styles.title, styles.chooseYourWeapon]}>Choose Your Weapon!</Text>     
        </View>

      </View> 
  );
}; //======================== End of Playing Screen ===============================

const styles = StyleSheet.create({ 
  navBarContainer: {
    flexDirection: 'row',         
    justifyContent: 'space-between',    
  },
  buttons: {        
    alignItems: 'center',   
    padding: 14,        
    borderRadius: 40
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
  scoresBoard: {
    flexDirection: 'row',        
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  score: {
    fontSize: 15,   
    fontWeight: 'bold',        
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
  title: {    
    fontWeight: 'bold',      
    alignSelf: 'center', 
    fontSize: 18,   
  },
  titleComputer: {       
    color: Colors.computer     
  },
  titleWinner: {
    fontSize: 22,   
    color: Colors.winner,       
  },  
  titlePlayer: {     
    color: Colors.player, 
    paddingTop: 10      
  }, 
  chooseYourWeapon: {         
    color: Colors.gameNameHeaderText    
  },  
  buttonContainer: {      
    flexDirection: 'row',    
    alignItems: 'center',
    height: '100%'       
  },
  weaponButtons: {   
    flex: 1,     
    justifyContent: 'center',    
    height: '100%',       
  },   
  img: {    
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain'            
  },    
  imgComputer: {       
    transform: [{ rotate: '90deg' }]
  },
  imgPlayer: {    
    transform: [{ rotate: '270deg' }],
  }  
});

export default GamePlayingScreen;
