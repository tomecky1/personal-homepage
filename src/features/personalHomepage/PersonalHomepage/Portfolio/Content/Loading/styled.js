import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Wrapper = styled.div`
    margin-top: 96px;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    font-size: 20px;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-top: 32px;
    }
`

export const StyledSpinner = styled.svg`
    margin-bottom: 48px;
    width: 24px;
    height: 24px;
    border: 3px solid ${({theme}) => theme.colors.primary};
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${rotate} 1s linear infinite;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        margin-top: 32px;
        width: 60px;
        aspect-ratio: 1;
    }
`
