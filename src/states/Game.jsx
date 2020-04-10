import React, { Component } from 'react';
import styled from '@emotion/styled';
import WhiteCard from '../components/WhiteCard';
import WhiteDeck from '../helpers/WhiteDeck'


const Table = styled.table({
    width: '100%',
    tableLayout: 'fixed',
})

const StyledRow = styled.tr({
    
})

const StyledCell = styled.td({
    border: '1px solid black'
})

const Container = styled.div({
    width: '100%',

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
});

const Hand = styled.div({
    width: '100%',

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
})

const ConfirmationContainer = styled.div({
    width: '100%',
    height: 50,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
})

const PlayerList = styled.div({
    width: '100%',
    height: 50,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
})

const ConfirmationButton = styled.button`
    background-color: grey;
    width: 200px;
    height: 100%;
    border: 1px solid black;
    transition: 0.3s;
    opacity: 0.6;
    cursor: pointer;
    text-decoration: none;

    :hover {
        opacity: 1;
    }
`

// A card object is one with a text and id field ***
class Game extends Component {

    constructor(props){
        super(props);
        this.handleSelectedCards = this.handleSelectedCards.bind(this);

        this.state = {
            whiteDeck: props.data.whiteDeck, // Imports deck of white cards, with a text and id
            playerHand: [], // An array of this players had with card objects
            playingField: [], // An array of the top right set of card objects to be played
            selectedCards: [], // Array of indexes of cards in playerhand to be played

            isPlayersTurn: true, // Is it this players turn to play a white card
        };
    }

    // Randomly chooses a white card from white card deck and adds it to players hand
    drawCard() {
        const card = this.getCard();
        this.setState((prevState) => ({
            playerHand: prevState.playerHand.concat(card),
        }));
    }

    // Randomly selects a card from the white card deck
    getCard() {
        const randomIndex = Math.floor(Math.random() * this.state.whiteDeck.length); // Get random number through the size of the deck
        const removedCard = this.state.whiteDeck.splice(randomIndex, 1); // Remove the element
        return removedCard[0]; // return the element removed
    }

    // If a card is selected, then adds the INDEX of that card with respect to this players hand, into a temporary array then sorts the array numerically
    // If a card is deselected, then it looks through the temporary array and removes the mention of that INDEX
    handleSelectedCards(index, selected) {
        if(selected){
            this.setState((prevState) => ({
                selectedCards: prevState.selectedCards.concat(index),
            }));
        }
        else {
            if(this.state.selectedCards.includes(index)) {
                this.state.selectedCards.splice(this.state.selectedCards.indexOf(index), 1);
            }
        }
        this.state.selectedCards.sort();
    }

    // When the selected cards are confirmed, the cards from the temporary array are copied into the playing field and then deleted from the players hand
    confirmSelectedCards() {
        const array = [];
        
        // Copies all card objects from the players hand to a temporary array using the indexes in selected cards
        for (let i = 0; i < this.state.selectedCards.length; i++) {
            array.push(this.state.playerHand[this.state.selectedCards[i]]);
        }
        // Sorts array for safety
        this.state.selectedCards.sort();
        // Removes the selected cards from this players hand
        for (let i = this.state.selectedCards.length - 1; i >= 0; i--) {
            this.state.playerHand.splice(this.state.selectedCards[i], 1);
        }

        // Updates the playing field to include the selected cards
        // Empties the selected cards array and then ends the players turn
        this.setState((prevState) => ({
            playingField: prevState.playingField.concat(array),
            selectedCards: [],
            isPlayersTurn: false,
        }));
    }

    //Temporary Function
    beginGame() {
        this.drawCard();
        this.drawCard();
        this.drawCard();
        this.drawCard();
        this.drawCard();
    }

    render() {
        return (
            <Table>
                <StyledRow>
                    <StyledCell colSpan='4'>
                        <PlayerList>
                            <div style={{width: 200, height: '100%', border: '1px solid black', marginLeft: 10}}>Player1</div>
                            <div style={{width: 200, height: '100%', border: '1px solid black', marginLeft: 10}}>Player2</div>
                            <div style={{width: 200, height: '100%', border: '1px solid black', marginLeft: 10}}>Player3</div>
                            <div style={{width: 200, height: '100%', border: '1px solid black', marginLeft: 10}}>Player4</div>
                        </PlayerList>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='1'>
                        <Container>
                            <WhiteCard/>
                        </Container>
                    </StyledCell>

                    <StyledCell colSpan='3'>
                        <Container>
                            {this.state.playingField.map((card, index)=>(
                                <WhiteCard text={(typeof(card) === 'undefined' ? 'Unknown Text' : card.text)} id={index}/>
                            ))}
                        </Container>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <ConfirmationContainer>
                            <ConfirmationButton onClick={() => {this.beginGame()}}/>
                            <ConfirmationButton onClick={() => {this.confirmSelectedCards()}}/>
                        </ConfirmationContainer>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <Hand>
                            {this.state.playerHand.map((card, index)=>(
                                <WhiteCard text={(typeof(card) === 'undefined' ? 'Unknown Text' : card.text)} index={index} handleSelectedCards={this.handleSelectedCards} isPlayersTurn={this.state.isPlayersTurn} />
                            ))}
                        </Hand>
                    </StyledCell>
                </StyledRow>
            </Table>

        );
    }
}

export default Game;