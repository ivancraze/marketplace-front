import styled from 'styled-components';

import colors from 'styles/colors';

export const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`;

export const ImagesWrapperStyled = styled.div`
    width: calc(50% - 20px);
    position: relative;
`;

export const LikeWrapperStyled = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        pointer-events: none;
    }
`;

export const ImageStyled = styled.img`
    width: calc(50% - 20px);
    margin-bottom: 10px;
    max-height: 40vh;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    object-fit: contain;
`;

export const InfoWrapperStyled = styled.div`
    width: calc(50% - 20px);
`;

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceWrapperStyled = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`;

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceRegularStyled = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`;

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceRegularWhenDiscountedStyled = styled.div`
    text-decoration: line-through;
    color: #999;
    font-size: 15px;
`;

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceDiscountedStyled = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`;
