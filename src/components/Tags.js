import React from 'react'
import styled, { css } from 'styled-components';
import { tagData } from '../tagData';

export const TagsContainer = styled.div`
    //border: 1px solid;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px 12px;
    gap: 24px;

    position: absolute;
    width: 100%;
    height: 55%;
    left: 0;
    top: 0;
`

export const Tag = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 24px;
    gap: 16px;
    width: 100%;
    height: 34px;

    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors.containerBgColor};

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

export const Tags = () => {
    return (
        <TagsContainer>
            {tagData.map((el) => {
                return (
                    <Tag color={el.color}>
                        <div className='tagColor'></div>
                        <div className='label'>{el.label}</div>
                    </Tag>
                )
            }
            )}
        </TagsContainer>
    )
}