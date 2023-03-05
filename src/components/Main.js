import React from 'react'
import styled, { css } from 'styled-components';

export const MainContainer = styled.main`
    position: absolute;
    width: 84vw;
    height: 100vh;
    right: 0;
    //left: 252px;
    top: calc(136px / 100vh * 100%);
    z-index: 100;

    border-radius: 16px 0px 0px 0px;
    background-color: ${props => props.theme.colors.mainBgColor};
`

export const Main = () => {
    return (
        <MainContainer></MainContainer>
    )
}