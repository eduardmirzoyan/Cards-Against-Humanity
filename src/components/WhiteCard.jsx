import React, { Component } from 'react';
import styled from '@emotion/styled';

const CardWrapper = styled.button`
    width: 187.5px;
    height: 262.5px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px;
    background-color: white;
    transition: 0.2s;

    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    :hover {
        opacity: 1;
        background-color: grey;
    }
`;

class WhiteCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            selected: false,
        }
    }

    handleSelect() {
        this.setState((prevState)=>({
            selected: !prevState.selected,
        }));
    }

    render() {
        return (
            <CardWrapper onClick={()=>(this.handleSelect())} style={{backgroundColor: (this.state.selected ? 'grey': 'white')}} >
                <p> {this.state.text} </p>
            </CardWrapper>
        );
    }
}

export default WhiteCard;