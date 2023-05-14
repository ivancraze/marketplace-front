import styled from 'styled-components';

export const ProductGroupStyled = styled.div`
    margin-top: 20px;
    > *:first-child {
        margin-bottom: 10px;
    }
`;

export const ProductGroupContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    > * {
        width: 16.666666%;
        margin-bottom: 20px;
    }
`;
