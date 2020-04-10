import React, { Component } from 'react';
import styled from '@emotion/styled';
import WhiteCard from '../components/WhiteCard';
import BlackCard from '../components/BlackCard';
import WhiteDeck from '../helpers/WhiteDeck';
import BlackDeck from '../helpers/BlackDeck';


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
    height: 75,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
})

const PlayerContainer = styled.div({
    width: 200, 
    height: '100%', 
    border: '1px solid black', 
    marginLeft: 10,
    textAlign: 'center',
    padding: 5,
    
})

const GameFeed = styled.p`
    font-size: 20px;
    word-wrap: break-word;
    font-family: "helvetica neue", helvetica, Arial, sans-serif;
`

const ConfirmationButton = styled.button`
    background-color: grey;
    color: black;
    width: 300px;
    height: 100%;
    border: 1px solid black;
    transition: 0.3s;
    opacity: 0.6;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;

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
            whiteDeck: new WhiteDeck(), // Imports deck of white cards, with a text and id
            blackDeck: new BlackDeck(), // Imports deck of black cards, with a text and id
            blackCard: {text: 'Unknown', id: 0},
            playerHand: [], // An array of this players had with card objects
            playingField: [], // An array of the top right set of card objects to be played
            selectedCards: [], // Array of indexes of cards in playerhand to be played
            allPlayers: [{name: 'Jack', points: 0, isCzar: true,}, {name: 'Jill', points: 2, isCzar: false,}],

            // WIP variables
            isPlayersTurn: true, // Is it this players turn to play a white card
        };
    }

    // Randomly chooses a white card from white card deck and adds it to players hand
    drawWhiteCard() {
        let card = this.state.whiteDeck.getCard();
        this.setState((prevState) => ({
            playerHand: prevState.playerHand.concat(card),
        }));
    }

    drawBlackCard() {
        let card = this.state.blackDeck.getCard();
        this.setState({
            blackCard: card,
        });
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
        this.drawBlackCard();
        this.drawWhiteCard();
        this.drawWhiteCard();
        this.drawWhiteCard();
        this.drawWhiteCard();
        this.drawWhiteCard();
    }

    render() {
        return (
            <Table>
                <StyledRow>
                    <StyledCell colSpan='4'>
                        <PlayerList>
                            {this.state.allPlayers.map((player, index)=>(
                                    <PlayerContainer style={{backgroundColor: (player.isCzar ? 'grey' : 'white')}}>
                                        {player.name}
                                        <hr width={'80%'}/>
                                        {'Points: ' + player.points}
                                    </PlayerContainer>
                            ))}
                        </PlayerList>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <Container>
                            <GameFeed>
                                { (this.state.allPlayers.filter((player)=>(player.isCzar === true)))[0].name + ' is the Card Czar.'}
                            </GameFeed>
                        </Container>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='1'>
                        <Container>
                            { <BlackCard text={this.state.blackCard.text}/> }
                        </Container>
                    </StyledCell>

                    <StyledCell colSpan='3'>
                        <Container>
                            {this.state.playingField.map((card, index)=>(
                                <WhiteCard text={(typeof(card) === 'undefined' ? 'Unknown Text' : card.text)} id={index} handleSelectedCards={this.handleSelectedCards} isPlayersTurn={false} visible={false}/>
                            ))}
                        </Container>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <ConfirmationContainer>
                            <ConfirmationButton onClick={() => {this.beginGame()}}>
                                <p>Draw Cards</p>
                            </ConfirmationButton>
                            <ConfirmationButton onClick={() => {this.confirmSelectedCards()}}>
                                <p>Confirm Selection</p>
                            </ConfirmationButton>
                        </ConfirmationContainer>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <Hand>
                            {this.state.playerHand.map((card, index)=>(
                                <WhiteCard text={(typeof(card) === 'undefined' ? 'Unknown Text' : card.text)} index={index} handleSelectedCards={this.handleSelectedCards} isPlayersTurn={this.state.isPlayersTurn} visible={true} />
                            ))}
                        </Hand>
                    </StyledCell>
                </StyledRow>
            </Table>

        );
    }
}

export default Game;