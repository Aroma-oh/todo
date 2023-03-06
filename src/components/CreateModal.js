import React, { useRef, useCallback } from "react";
import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
    border: 1px solid; /* 지울 예정 */

    z-index: 100;
    background-color: rgba(45, 45, 45, 0.3);

    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalView = styled.div.attrs((props) => ({ role: "dialog" }))`
    background-color: ${(props) => props.theme.colors.containerBgColor};
    width: 57%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 30px;
    transition: all 0.3s;
    .buttonBox {
        width: 100%;
        height: 20%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 18px 56px;
        gap: 10px;

        > button {
            width: 15%;
            height: 70%;
            border: none;
            border-radius: 12px;

            font-size: 1.2rem;
            font-weight: 700;
            cursor: pointer;

            /* 색상 적용이 안됨 */
            background-color: ${(props) =>
                props.cancel
                    ? props.theme.colors.containerBgColor
                    : props.theme.colors.buttonColor};
            color: ${(props) =>
                props.cancel
                    ? props.theme.colors.textColor
                    : props.theme.colors.buttonTextColor};
        }
    }
    .inputBox {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 18px 56px;

        .title {
            color: ${(props) => props.theme.colors.textColor};
            font-weight: 500;
            font-size: 1.5rem;
            margin: 8px 12px;
        }

        .content {
            color: ${(props) => props.theme.colors.textColor};
            font-weight: 400;
            font-size: 1.2rem;
        }

        > textarea {
            background-color: ${(props) => props.theme.colors.mainBgColor};
            width: 100%;
            padding: 24px 24px;
            border: none;
            border-radius: 16px;

            overflow: hidden;
            resize: none;

            .description {
                padding-bottom: 4px;
            }
            &::placeholder {
                color: ${(props) => props.theme.colors.textColor};
                font-weight: 400;
                font-size: 1.2rem;
            }
        }
    }
`;

export const CreateModal = ({ isOpen, openModalHandler }) => {
    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        textRef.current.style.height = textRef.current.scrollHeight + "px";
    }, []);

    return (
        <>
            <ModalContainer onClick={openModalHandler}>
                <ModalView>
                    <div className="buttonBox">
                        <button cancel> Cancel </button>
                        <button> Add </button>
                    </div>
                    <div className="inputBox">
                        <h2 className="title"> Title </h2>
                        <textarea
                            className="content"
                            placeholder="add a title ..."
                        />
                    </div>
                    <div className="inputBox">
                        <h2 className="title"> Description </h2>
                        <textarea
                            ref={textRef}
                            onInput={handleResizeHeight}
                            className="content description"
                            placeholder="add a description ..."
                        />
                    </div>
                </ModalView>
            </ModalContainer>
        </>
    );
};

export const ModalBtn = styled.button`
    background-color: ${(props) => props.theme.colors.modalBgColor};
    text-decoration: none; //기본값은 none, 속성 여러개주는 것도 가능 -> overline underline
    border: none;
    padding: 20px;
    color: white;
    border-radius: 50px;
    cursor: grab;
    &:hover {
        background-color: rgb(255, 202, 200);
    }
`;

// {isOpen ? (
//     <ModalView
//         onClick={(e) => e.stopPropagation()}
//         className={isOpen ? "act" : ""}
//     >
//         <button onClick={openModalHandler}> &Chi; </button>
//     </ModalView>
// ) : null}
