import styled from 'styled-components';
import a from 'color-alpha';

export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`

export const Tile = styled.li`
    padding: 56px;
    margin: 0;
    background: ${({theme}) => theme.colors.boxBackground};
    border: 6px solid ${({theme}) => theme.colors.tile.border};
    transition: border-color 0.3s ease-in-out;
    box-shadow: ${({theme}) => theme.boxShadow};
    border-radius: ${({theme}) => theme.borderRadiusSmall};

    &:hover {
        border-color: ${({theme}) => theme.colors.tile.borderHover};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        padding: 22x;
    }
`

export const Name = styled.h3`
    font-size: 24px;
    margin: 0;
    color: ${({theme}) => theme.colors.tile.header};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`

export const Description = styled.p`
    line-height: 1.4;
    margin-top: 24px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-top: 12px;
    }
`

export const Links = styled.dl`
    margin-bottom: 0;
    margin-top: 24px;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;

    @Media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-top: 12px;
    }
`
export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
    grid-gap: 8px;
`

export const LinksValue = styled.dd`
    margin: 0;
`

export const Link = styled.a`
    color: ${({theme}) => theme.colors.primary};
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid ${({theme}) => a((theme.colors.primary), 0.3)};

    &hover {
        border-color: unset;
    }
`
