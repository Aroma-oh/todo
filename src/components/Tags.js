import React from 'react'
import styled, { css } from 'styled-components';
import { tagData } from '../data/tagData';

export const TagsContainer = styled.div`
    //border: 1px solid;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px 12px;
    gap: 12px;

    position: absolute;
    width: 100%;
    height: 55%;
    left: 0;
    top: 0;
`

export const Tag = styled.button`
    border: 1px solid;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 12px 24px;
    gap: 16px;
    //width: 100%;
    height: 48px;

    cursor: pointer;
    border: none;
    border-radius: 24px;
    //background-color: gray;
    background-color: ${props => props.theme.colors.containerBgColor};
    &.checked {
        background-color: gray;
    }

    .tagColor {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: ${props => props.color};
    }
    .label {
        color: ${props => props.theme.colors.textColor};
        font-size: 1rem;
    }
`

export const Tags = ({ selectedTag, tagHandler }) => {
    console.log(`tagHandler: ${tagHandler}`)
    return (
        <TagsContainer>
            {tagData.map((el) => {
                return (
                    <Tag
                        key={el.label}
                        color={el.color}
                        onClick={() => { tagHandler(el.label) }}
                        className={selectedTag === el.label ? "checked" : ""}>
                        <div className='tagColor'></div>
                        <div className='label'>{el.label}</div>
                    </Tag>
                )
            }
            )}
        </TagsContainer>
    )
}