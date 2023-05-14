import styled from 'styled-components';

import { Z_INDEX_LEVEL_1 } from 'styles/consts';

export const WrapperStyled = styled.div`
    position: relative;
`;

interface IDropdownWrapperProps {
    toLeft: boolean;
}
export const DropdownWrapperStyled = styled.div<IDropdownWrapperProps>`
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
    position: absolute;
    top: calc(100% + 10px);
    ${({ toLeft }) => (toLeft ? 'right' : 'left')}: 0;
    z-index: ${Z_INDEX_LEVEL_1};
`;
