import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, cx } from 'emotion';
/** @jsx jsx */
import { jsx } from '@emotion/core';

const CardWrapper = styled.div`
    width: 187.5px;
    height: 262.5px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px;

    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;

const WhiteCard = (props) => {
    return(
        <CardWrapper/>
    );
};

export default WhiteCard;


// <div style={{display: 'flex'}}>
//     <CardWrapper/>
// </div>