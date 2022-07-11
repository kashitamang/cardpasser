import { useState, createContext, useContext } from 'react';
import initialCards from './cards-data';

//step 1: create context (import and then create a new constant variable)
const GameContext = createContext();

//step 2 create a function that allows us to use the context state
//initialize state 
export default function GameProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  //we need to bundle our state in a single object 
  const gameState = {
    deck, setDeck, 
    playerOneHand, setPlayerOneHand, 
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand, 
    playerThreeHand, setPlayerThreeHand,
    from, setFrom, 
    to, setTo,
  };

  //then we need to return the component

  return <GameContext.Provider value={gameState}>
    {children}
  </GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}


