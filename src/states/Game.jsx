import React, { Component } from 'react';
import styled from '@emotion/styled';
import WhiteCard from '../components/WhiteCard';

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

const ConfirmationButton = styled.div({
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

class Game extends Component {

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
                            <WhiteCard/>
                            <WhiteCard/>
                            <WhiteCard/>
                        </Container>
                    </StyledCell>
                </StyledRow>

                <StyledRow>
                    <StyledCell colSpan='4'>
                        <ConfirmationButton>
                            <div style={{width: 200, height: '100%', border: '1px solid black'}}/>
                        </ConfirmationButton>
                    </StyledCell>
                </StyledRow>


                <StyledRow>
                    <StyledCell colSpan='4'>
                        <Hand>
                            <WhiteCard/>
                            <WhiteCard/>
                            <WhiteCard/>
                            <WhiteCard/>
                            <WhiteCard/>
                            <WhiteCard/>
                            <WhiteCard/>
                        </Hand>
                    </StyledCell>
                </StyledRow>
            </Table>

        );
    }
}

export default Game;







//temp stuff 

/*
import WhiteCard from '../components/WhiteCard';



*/