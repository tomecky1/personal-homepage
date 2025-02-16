import styled from 'styled-components';
import {ComponentType} from "react";

export const List = styled.ul`
    margin-top: 56px;
    margin-bottom: 0;
    display: flex;
    list-style: none;
    padding: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px
    ) {
        margin-top: 40px;
    }
`;

export const Item = styled.li`
    &:not(:last-child) {
        margin-right: 16px;

        @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
            margin-right: 16px;
        }
    }
`;

export const Link = styled.a`
    color: ${({theme}) => theme.colors.textPrimary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

interface Theme {
    breakpoints: {
        mobileMax: number;
    };
}

export const styleIcon = (Icon: ComponentType<any>) => styled(Icon)`
    height: auto;
    @media (max-width: ${props => `${props.theme.breakpoints.mobileMax}px`}) {
        width: 32px;
    }
`;