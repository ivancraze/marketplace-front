import styled from 'styled-components';
import colors from 'styles/colors';
import { FOOTER_HEIGHT } from 'styles/consts';

export const FooterStyled = styled.footer`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.primary};
    color: #fff;
    height: ${FOOTER_HEIGHT};
    > :last-child {
        cursor: pointer;
    }
`;
