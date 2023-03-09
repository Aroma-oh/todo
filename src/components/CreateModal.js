import React, { useState, useRef, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { Tags, Tag } from "./Tags";
import { tagData } from "../data/tagData";
import { postData } from "../data/postData";

export const ModalContainer = styled.div`
    // border: 1px solid; /* 지울 예정 */

    z-index: 1000;
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

export const ModalView = styled.div.attrs((props) => ({ role: "dialog" }))`
    background-color: ${(props) => props.theme.colors.containerBgColor};
    width: 57%;
    min-width: 760px;
    //height: 60%;

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
        margin-top: 12px;
        gap: 10px;

        > button {
            width: 15%;
            height: 45px;
            border: none;
            border-radius: 12px;

            font-size: 1.2rem;
            font-weight: 700;
            cursor: pointer;

            /* 색상 적용이 안됨 
                👉 컴포넌트가 아니어서 안됨 
                    👉 컴포넌트로 분리하기 / 다른 방법 찾아보기 
            */
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
            // margin-bottom: 36px;
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
    .tags {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 63px;
        gap: 23px;

        /* position: absolute; */
        width: 100%;
        height: 130px;
        left: 0px;
        top: 450px;
    }
`;

export const CreateModal = ({
    isOpen,
    openModalHandler,
    dataHandler,
    data,
}) => {
    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        textRef.current.style.height = textRef.current.scrollHeight + "px";
    }, []);

    const [selectedTag, setSelectedTag] = useState(""); // 초기값이 없어서 오류 발생 // 📌 옵셔널 체이닝이 언디 오류를 해결해줌
    const tagHandler = (label) => {
        setSelectedTag(label);
    };

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    const contentHandler = (e) => {
        setContent(e.target.value);
    };
    //
    // state가 데이터를 만들기전에 filter가 참조해서 오류가 난다.
    // 옵셔널 체이닝을하면 state가 만들어지기 전에 undefined, 이후에 값을 주어 오류를 제거해준다.
    // state는 최초 렌더링시, 컴포넌트가 렌더링될때 두번 렌더되기 때문에 state가 업데이트 된 이후에 값을 받아오는 것이 가능하다.
    // 처음에 언디 -> 다음 렌더할때 데이터를 읽어옴
    let tagColor = tagData.find((el) => el.label === selectedTag)?.color;

    const newData = {
        id: data.length,
        title,
        content,
        tag: selectedTag,
        tagColor,
        done: false,
    };

    const cleanModal = () => {
        setTitle("");
        setContent("");
        setSelectedTag("");
        console.log(newData);
    };

    return (
        <>
            {isOpen ? (
                <ModalContainer onClick={() => openModalHandler()}>
                    <ModalView onClick={(e) => e.stopPropagation()}>
                        <div className="buttonBox">
                            {/* 📌  */}
                            <button cancel onClick={() => openModalHandler()}>
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    dataHandler(newData);
                                    cleanModal();
                                }}
                            >
                                {" "}
                                Add{" "}
                            </button>
                        </div>
                        <div className="inputBox">
                            <h2 className="title"> Title </h2>
                            <textarea
                                className="content"
                                placeholder="add a title ..."
                                value={title}
                                onChange={titleHandler}
                            />
                        </div>
                        <div className="inputBox">
                            <h2 className="title"> Description </h2>
                            <textarea
                                ref={textRef}
                                onInput={handleResizeHeight}
                                className="content description"
                                placeholder="add a description ..."
                                value={content}
                                onChange={contentHandler}
                            />
                        </div>
                        {/* 컴포넌트에 프롭스로 dir? */}
                        <div className="tags">
                            {tagData.map((el) => {
                                return (
                                    <Tag
                                        key={el.label}
                                        color={el.color}
                                        onClick={() => {
                                            tagHandler(el.label);
                                        }}
                                        className={
                                            selectedTag === el.label
                                                ? "checked"
                                                : ""
                                        }
                                    >
                                        <div className="tagColor"></div>
                                        <div className="label">{el.label}</div>
                                    </Tag>
                                );
                            })}
                        </div>
                    </ModalView>
                </ModalContainer>
            ) : null}
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
