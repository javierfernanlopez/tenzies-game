import "./App.css"
import Die from "./Die"
import { useState } from "react";
import {nanoid} from "nanoid"
import React from "react";
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice(){
    let arrayDice = []
    for(let i=0; i<10; i++){
      arrayDice.push(generateNewDie())
    }
    return arrayDice
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }
      ))
  }

  function generateNewDie() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return{
      value: randomNumber, 
      isHeld: false,
      id: nanoid()
    }}
  

  function rollDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  const [tenzies, setTenzies] = useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
      console.log("You Won!")
    }
  }, [dice])
  
  function newGame() {
      setTenzies(!tenzies)
      setDice(allNewDice())
      
}

function playGame() {
  setPlay(!play)
}

  const [play, setPlay] = useState(false)
  
  const diceElements = dice.map(die => <Die 
                                          key={die.id} 
                                          value={die.value} 
                                          isHeld={die.isHeld} 
                                          holdDice={() => holdDice(die.id)} 
                                          />
                                          )


  return (
    <main>
        <div className="container">
          <div className="text">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p></div>
          <div className="game">
            {play ? 
                    <div className="content">
                    
                      <div className="grid-container">
                          {diceElements}
                      </div>
                      <div className="roll-button">
                        {tenzies ? <button id="button" onClick={newGame}>New game</button> : <button id="button" onClick={rollDice}>Roll</button>}
                      </div>
                    </div>
              : <button onClick={playGame}>Play</button>}
            </div>
          
        </div>
        {tenzies ? <Confetti /> : ""}
    </main>
  );

  }
export default App;


