import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Toggle } from "./Toggle.js";
import { Tags } from "./Tags.js";
// import {}

export const NavContainer = styled.nav`
    position: fixed;
    width: 260px;
    height: 100vh;
    left: 0px;
    top: 100px;

    background-color: ${(props) => props.theme.colors.containerBgColor};
    > #filterTask {
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
        color: ${(props) => props.theme.colors.textColor};
    }
`;
export const Nav = ({
    isDarkMode,
    toggleHandler,
    selectedTag,
    tagHandler,
    isHide,
    setIsHide,
}) => {
    return (
        <NavContainer>
            <Tags selectedTag={selectedTag} tagHandler={tagHandler} />
            <div id="filterTask">
                <input
                    type="checkbox"
                    onClick={() => setIsHide(!isHide)}
                ></input>
                <label>Hide Done Tasks</label>
            </div>
            <Toggle isDarkMode={isDarkMode} toggleHandler={toggleHandler} />
        </NavContainer>
    );
};
