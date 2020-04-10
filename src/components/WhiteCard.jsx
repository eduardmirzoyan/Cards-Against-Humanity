import React, { Component } from 'react';
import styled from '@emotion/styled';

const CardWrapper = styled.button`
    width: 187.5px;
    height: 262.5px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
    background-color: white;
    transition: 0.2s;

    font-size: 20px;
    word-wrap: break-word;
    font-family: "helvetica neue", helvetica, Arial, sans-serif;

    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    :hover {
        opacity: 1;
        background-color: grey;
    }
`;

class WhiteCard extends Component {

    state = {
        selected: false,
    }

    // Changes the state of the card from being selected and visa-versa
    // Then calls the game's handleselectedcards function
    handleSelect() {
        this.setState((prevState)=>({
            selected: !prevState.selected,
        }),
        ()=>{
            this.props.handleSelectedCards(this.props.index, this.state.selected)
        });
    }

    render() {
        return (
            <CardWrapper onClick={()=>(this.handleSelect())} style={{backgroundColor: (this.state.selected && this.props.isPlayersTurn ? 'grey': 'white') } } >
                <p style={{display: ((this.props.visible) ? 'inline-block' : 'none')}}> {this.props.text} </p>
            </CardWrapper>
        );
    }
}

export default WhiteCard;