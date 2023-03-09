import React from "react";
import styled, { css } from "styled-components";

export const ToggleContainer = styled.div`
    //border: 1px solid;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 77px;

    position: absolute;
    width: 100%;
    height: 70px;
    top: 67%;

    cursor: pointer;

    > .toggle-container {
        //position: absolute;
        position: fixed;
        left: 90px;
        width: 80px;
        height: 40px;
        border: solid 2px;
        border-radius: 30px;
        border-color: ${(props) => props.theme.colors.toggleBorderColor};
        background-color: ${(props) => props.theme.colors.toggleColor};
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    > .toggle-circle {
        position: absolute;
        top: 18.5px;
        left: 94px;
        width: 32px;
        height: 32px;
        border: solid 2px;
        border-radius: 50%;
        border-color: ${(props) => props.theme.colors.toggleBorderColor};
        background-color: ${(props) => props.theme.colors.toggleColor};
        transition: all 0.5s;
        &.toggle--checked {
            left: 132px;
        }
    }
`;

export const Toggle = ({ isDarkMode, toggleHandler }) => {
    return (
        <ToggleContainer onClick={toggleHandler}>
            <>
                <div className="toggle-container" />
                <div
                    className={`toggle-circle ${
                        isDarkMode ? "toggle--checked" : ""
                    }`}
                />
            </>
        </ToggleContainer>
    );
};
