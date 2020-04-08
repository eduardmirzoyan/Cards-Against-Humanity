class WhiteDeck {
    constructor() {
        this.deck = [{text: 'text1', id: 1}, {text: 'text2', id: 2}, {text: 'text3', id: 3}]; 
    }

    getCard() {
        const randomIndex = Math.floor(Math.random() * this.deck.length); // Get random number through the size of the deck
        const removedCard = this.deck.splice(randomIndex, 1); // Remove the element
        return removedCard[0]; // return the element removed
    }

    getSize() {
        return this.deck.length;
    }
}

export default WhiteDeck;