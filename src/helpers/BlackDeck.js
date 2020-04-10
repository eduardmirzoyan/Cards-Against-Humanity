import data from './data';

class BlackDeck {
    constructor() {
        this.deck = data.blackDeck.slice(); 
    }

    getCard() {
        // Resets the deck when it is empty
        if(this.getSize() === 0) {
            this.deck = data.blackDeck.slice();
        }
        const randomIndex = Math.floor(Math.random() * this.deck.length); // Get random number through the size of the deck
        const removedCard = this.deck.splice(randomIndex, 1); // Remove the element
        return removedCard[0]; // return the element removed
    }

    getSize() {
        return this.deck.length;
    }
}

export default BlackDeck;