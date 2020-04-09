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

class Game extends Component {
    
    state = {
        whiteDeck: this.props.data.whiteDeck,
        playerHand: [{text: 'text1', id: 1}, {text: 'text2', id: 1}],
        playingField: [],
    };

    drawCard() {
        const card = this.getCard();
        this.setState((prevState) => ({
            playerHand: prevState.playerHand.concat(card),
        }));
    }

    getCard() {
        const randomIndex = Math.floor(Math.random() * this.state.whiteDeck.length); // Get random number through the size of the deck
        const removedCard = this.state.whiteDeck.splice(randomIndex, 1); // Remove the element
        return removedCard[0]; // return the element removed
    }

    moveCard() {
        const card = this.state.playerHand.splice(0, 1);
        this.setState({
            playingField: this.state.playingField.concat(card),
        });
    }

    handleSelectedCard() {
        // Work in progress
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
                            <ConfirmationButton onClick={() => {this.drawCard() }  }/>

                        </ConfirmationContainer>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <Hand>
                            {this.state.playerHand.map((card, index)=>(
                                <WhiteCard text={(typeof(card) === 'undefined' ? 'Unknown Text' : card.text)} id={index} />
                            ))}
                        </Hand>
                    </StyledCell>
                </StyledRow>
            </Table>

        );
    }
}

export default Game;