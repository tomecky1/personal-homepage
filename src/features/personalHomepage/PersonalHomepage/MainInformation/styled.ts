import styled from 'styled-components';
// @ts-ignore
import {ButtonLink} from "../ButtonLink/ButtonLink.tsx";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
    margin-top: 119px; // fix for theme switch height

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tabletVerticalMax}px) {
        grid-gap: 32px;
    }

`

export const Avatar = styled.img`
    width: 30vw;
    max-width: 384px;
`

export const ThisIs = styled.div`
    font-size: 12px;
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.05em;

`

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 0 0 0;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: 767px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Summary = styled.p`
    font-size: 20px;
    margin: 36px 0 0 0;
    line-height: 1.4;
    max-width: 650px;
`

export const ButtonIcon = styled.img`
    margin-right: 16px;
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;

    @media ${({theme}) => theme.breakpoints.mobileMax}px {
        margin-top: 26px;
    }
`

