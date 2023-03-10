import React, { useState } from "react";
import styled from "styled-components";
import { CreateModal } from "./CreateModal.js";
import { Post } from "./Post.js";

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
    // openModalHandler,
}) => {
    const [targetId, setTargetId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = (id) => {
        setTargetId(id);
        setIsOpen(!isOpen);
    };
    const updateDataHandler = (updateData) => {
        setData([...data, updateData]);
        openModalHandler();
        console.log("눌림");
        console.log(updateData);
    };
    return (
        <>
            <MainContainer>
                {data
                    .filter((el) => {
                        if (isHide) return el.done === false;
                        else return el;
                    })
                    .map((el) => {
                        return (
                            <Post
                                {...el}
                                data={data}
                                setData={setData}
                                doneHandler={doneHandler}
                                openModalHandler={openModalHandler}
                            />
                        );
                    })}
            </MainContainer>

            <CreateModal
                type="edit"
                isOpen={isOpen}
                openModalHandler={openModalHandler}
                data={data}
                editData={data.find((v) => v.id === targetId)}
                updateDataHandler={updateDataHandler}
            />
        </>
    );
};
