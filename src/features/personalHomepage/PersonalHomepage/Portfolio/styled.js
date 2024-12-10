import styled from 'styled-components';


export const Section = styled.section`
    margin-top: 72px; // fix for theme switch height
    padding: 12px;
    background: ${({theme}) => theme.colors.boxBackground};
    box-shadow: ${({theme}) => theme.boxShadow};
    border-radius: ${({theme}) => theme.borderRadiusSmall};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`
export const StyledGithubIcon = styled.img`
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 8px;
`

export const Header = styled.header`
    text-align: center;
`

export const MyRecentProjects = styled.h3`
    font-size: 28px;
    font-weight: normal;
    margin-top: 8px;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`

