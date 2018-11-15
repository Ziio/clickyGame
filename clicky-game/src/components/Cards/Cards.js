import React, { Component } from 'react';
import theCards from '../../theCards.json';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: theCards,
          score: 0,
          topScore: 0,
          clicked: Array(6).fill(true)
        };
      }

cardShuffle = () => {
    let card = this.state.cards;
    for (let i = card.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));
    }
}

clicks = () => {
    let clicks = true;
    ("#myBtn").on('click', function(){
    clicks.toggle(clicks);
    clicks = !clicks;
});
}


game = () => {

}







    render () {
        return (
            <div className= "cards">
            testing
            </div>
        );

    }
}

export default Cards;