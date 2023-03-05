import React from 'react'
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
    // border: 1px solid;
    background-color: white;
    width: 100vw;
    height: 100px;
    left: 0;
    top: 0;
    margin: 0;
    padding: 12px 8px;

    position: sticky; // sticky인데 움직인드아ㅏㅏ
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.colors.containerBgColor};
    text-decoration: none;

    .title {
        color: ${props => props.theme.colors.textColor};
        font-weight: 700;
        font-size: 2.5rem;
        text-decoration: none;
        margin-left: 3.7%;
        cursor: pointer;
    }

    .add {
        position: absolute;
        color: ${props => props.theme.colors.buttonTextColor};
        background-color: ${props => props.theme.colors.buttonColor};
        border-radius: 100%;
        border: none;
        cursor: pointer;
        width: 50px;
        height: 50px;
        right: 3.7%;
        font-size: 3rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
    }
`

export const Header = () => {
    return (
        <HeaderContainer>
            <h1 className='title'> todo </h1>
            <button className='add'>+</button>
        </HeaderContainer>
    )
}

/* height: calc(136px / 982px * 100%); */
/* ${props =>
    props.theme.size.desktop('sm') &&
    css`
    height: 100px;
`}
${props =>
    props.theme.size.mobile('xs') &&
    css`
    height: 50px;
`} */