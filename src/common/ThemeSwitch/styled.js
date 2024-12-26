import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    color: inherit;
    outline-offset: 8px;
`;

export const Text = styled.span`
    margin-right: 12px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const Box = styled.span`
    background: ${({theme}) => theme.colors.themeSwitch.background};
    padding: 3px;
    border: 1px solid;
    width: 48px;
    border-radius: 12px;
    display: flex;
`;

export const IconWrapper = styled.span`
    border-radius: 50%;
    background: currentColor;
    display: flex;
    padding: 3px;
    transition: transform 0.3s;

    ${({moveToRight}) =>
            moveToRight &&
            css`
                transform: translateX(20px);
            `}
`;

export const StyledSunIcon = styled.img`
    color: ${({theme}) => theme.colors.themeSwitch.icon};
    width: 14px;
    height: 14px;
`;
