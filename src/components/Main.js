import React from "react";
import styled, { css } from "styled-components";
import { Post } from "./Post.js";
import { postData } from "../data/postData";
import { useState } from "react";

export const MainContainer = styled.div`
    display: flex;
    /* grid-auto-flow: column; */
    /* grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    row-gap: 10px;
    column-gap: 20px; */

    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 24px 24px;
    gap: 4px;
    // order? 를 동적으로 줘서 row로 보이게 계산함

    /**
    display: grid
    grid auto row 
    grid row end 
     */

    position: relative;
    width: 85vw;
    height: 100vh;
    left: 260px;
    top: 100px;

    border-radius: 16px 0px 0px 0px;
    background-color: ${(props) => props.theme.colors.mainBgColor};
`;

export const Main = ({
    data,
    setData,
    doneHandler,
    isHide,
    openModalHandler,
}) => {
    return (
        <MainContainer>
            {data
                .filter((el) => {
                    if (isHide) return el.done === false;
                    else return el;
                })
                .map((el) => {
                    return (
                        <Post
                            id={el.id}
                            title={el.title}
                            content={el.content}
                            color={el.tagColor}
                            done={el.done}
                            data={data}
                            setData={setData}
                            doneHandler={doneHandler}
                            openModalHandler={openModalHandler}
                        />
                    );
                })}
        </MainContainer>
    );
};
