import React from 'react'
import styled, { css } from 'styled-components';
import { Toggle } from './Toggle.js'
import { Tags } from './Tags.js'

export const NavContainer = styled.nav`
    position: absolute;
    // position: sticky;
    width: 16.25vw; 
    min-width: 240px;
    height: 100vh; 
    left: 0px;
    top: calc(136px / 100vh * 100%);

    background-color: ${props => props.theme.colors.containerBgColor};
    > #filterTask {
        // border: 1px solid;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 29px 27px 27px 36px;
        gap: 10px;

        position: absolute;
        width: 100%;
        height: 12%;
        left: 0;
        top: 55%; 

        font-size: 1.2rem;
        color: ${props => props.theme.colors.textColor};
    }
`
export const Nav = ({ isDarkMode, toggleHandler }) => {
    return (
        <NavContainer>
            <Tags />
            <div id='filterTask'>
                <input
                    type="checkbox"
                ></input>
                <label >Hide Done Tasks</label>
            </div>
            <Toggle isDarkMode={isDarkMode} toggleHandler={toggleHandler} />
        </NavContainer>
    )
}