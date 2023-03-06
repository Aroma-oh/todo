import React from "react";
import styled, { css } from "styled-components";
import { postData } from "../data/postData";
import { useState } from "react";

export const PostContainer = styled.div`
    position: absolute;
    width: 43%;
    left: 0px;
    top: 0px;
    margin: 12px;
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.postColor};

    .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 14px 25px;
        margin-left: 0px;
        gap: 10px;

        width: 100%;
        height: 56.56px;
        left: 0px;
        top: 3px;

        color: ${(props) => props.theme.colors.textColor};
        font-weight: 500;
        font-size: 1.2rem;
        text-decoration: none;
        margin-left: 3.7%;
        > i {
            font-size: 1.8rem;
            margin-right: 24px;
            cursor: pointer;
        }
    }
    .content {
        margin: 0 18px;
        padding: 12px 27px;

        color: ${(props) => props.theme.colors.textColor};
        font-weight: 400;
        font-size: 1rem;
    }
`;

const PostFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 25px;
    gap: 10px;
    width: 100%;

    .label {
        border-radius: 100%;
        background-color: ${(props) => props.color};
        width: 30px;
        height: 30px;
    }
`;

export const Post = () => {
    const [data, setData] = useState([...postData]);
    return (
        <PostContainer className="here">
            {data.map((el) => {
                console.log(el);
                return (
                    <div className="postBody" key={el.id}>
                        <div className="title">
                            <h3>{el.title}</h3>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                        <div className="content">{el.content}</div>
                        <PostFooter color={el.tagColor}>
                            {/* label을 스타일드 컴포넌트로 분리 */}
                            <div className="label" />
                            <div className="activeBox">
                                {/* onChange => dispatch redux로 data 변경 */}
                                <input
                                    type="checkbox"
                                    checked={el.done}
                                    onClick={(e) => {
                                        setData(
                                            data.map((d) => {
                                                if (d.id === el.id) {
                                                    return {
                                                        ...d,
                                                        done: !d.done,
                                                    };
                                                }
                                                return d;
                                            })
                                        );
                                        // console.log(e.target.checked) 기존 데이터가 이미 boolean
                                    }}
                                />
                                <label>
                                    {el.done === true ? "Done" : "Active"}
                                </label>
                            </div>
                        </PostFooter>
                    </div>
                );
            })}
        </PostContainer>
    );
};
