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
        whiteDeck: new WhiteDeck(),
        playerHand: [],
        playingField: [new WhiteCard()],
    };

    draw() {
        const card = this.state.whiteDeck.getCard();
        this.setState((prevState) => ({
            playerHand: prevState.playerHand.concat(card),
        }));
    }

    temp () {
        for(let i = 0; i < this.state.playerHand.length; i++) {
            console.log(this.state.playerHand[i])
        }
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
                            {this.state.playingField[0].render()}
                        </Container>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <ConfirmationContainer>
                            <ConfirmationButton onClick={() => (this.draw())}/>
                        </ConfirmationContainer>
                    </StyledCell>
                </StyledRow>


                <StyledRow>
                    <StyledCell colSpan='4'>
                        <Hand>
                            {this.state.playerHand.map((value, index)=>(
                                <WhiteCard text={(typeof(value) === 'undefined' ? 'Unknown Text' : value.text)} id={index}/>
                            ))}
                        </Hand>
                    </StyledCell>
                </StyledRow>
            </Table>

        );
    }
}

export default Game;