import React from "react";
import styled, { css } from "styled-components";
import { CreateModal } from "./CreateModal";

export const ModalContainer = styled.div`
    z-index: 1;
    background-color: rgba(45, 45, 45, 0.3);

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ModalView = styled.div`
    z-index: 2;

    position: absolute;
    top: 46px;
    right: 21px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ModalButton = styled.button`
    background-color: ${(props) => props.theme.colors.containerBgColor};
    width: 120px;
    height: 43px;

    border-radius: ${(props) =>
        props.top ? "10px 10px 0px 0px" : "0px 0px 10px 10px"};
    border: none;
    border-bottom: ${(props) => (props.top ? "1px solid" : null)};

    color: ${(props) => props.theme.colors.textColor};
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;

    cursor: pointer;
`;

export const EditModal = ({
    openEditModalHandler,
    openModalHandler,
    deletePostHandler,
}) => {
    return (
        <>
            <ModalContainer onClick={openEditModalHandler} />
            <ModalView>
                <ModalButton
                    top
                    onClick={() => {
                        openModalHandler();
                        openEditModalHandler();
                    }}
                >
                    Edit
                </ModalButton>
                <ModalButton
                    onClick={() => {
                        deletePostHandler();
                        openEditModalHandler();
                    }}
                >
                    Delete
                </ModalButton>
            </ModalView>
        </>
    );
};
