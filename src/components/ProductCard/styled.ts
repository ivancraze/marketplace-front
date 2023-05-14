import styled from 'styled-components';

import colors from 'styles/colors';

export const WrapperStyled = styled.div`
    padding: 10px;
    position: relative;
    svg {
        cursor: pointer;
    }
`;

export const LikeWrapperStyled = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
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
    margin-bottom: 10px;
    width: 100%;
    height: 165px;
    border-radius: 4px;
    object-fit: scale-down;
`;

export const PriceWrapperStyled = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const PriceRegularStyled = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`;

export const PriceRegularWhenDiscountedStyled = styled.div`
    text-decoration: line-through;
    color: #999;
    font-size: 15px;
`;

export const PriceDiscountedStyled = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`;

export const TitleStyled = styled.h3`
    margin-bottom: 5px;
`;

export const DescStyled = styled.div`
    margin-bottom: 10px;
`;
