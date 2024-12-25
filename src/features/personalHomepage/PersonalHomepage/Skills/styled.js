import styled from 'styled-components';
import {SubHeader} from "../SubHeader/SubHeader.jsx";

export const Section = styled.section`
    margin-top: 72px; // fix for theme switch height
    padding: 32px;
    background: ${({theme}) => theme.colors.boxBackground};
    box-shadow: ${({theme}) => theme.boxShadow};
    border-radius: ${({theme}) => theme.borderRadiusSmall};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
    padding: 0;
    margin-top: 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 16px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
        margin-top: 12px;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    line-height: 1.4;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
    }
`
export const Bullet = styled.img`
    margin-right: 16px;
    height: auto;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        margin-right: 8px;
        width: 6px;
    }
`

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.header};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 12px;
    }
`