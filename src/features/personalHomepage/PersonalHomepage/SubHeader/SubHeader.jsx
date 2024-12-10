import styled from 'styled-components';

export const SubHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0 0 16px 0;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: 767px) {
        font-size: 18px;
    }
`