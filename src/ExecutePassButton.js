import React from 'react';
import Card from './Card';
import { useGameContext } from './GameProvider';
import { findCardIndex } from './utils';

export default function ExecutePassButton() {
  const {
    deck, setDeck, 
    playerOneHand, setPlayerOneHand, 
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand, 
    playerThreeHand, setPlayerThreeHand,
    from, to
  } = useGameContext();

  function passCard(card) {

    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

    // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;

    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

    toHand.push(cardToMove);

    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);

    setSelectedCard(null);
  }

  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
