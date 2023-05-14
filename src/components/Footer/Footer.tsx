import { FooterStyled } from './styled';
import React, { PropsWithChildren } from 'react';

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
    return <FooterStyled>{children}</FooterStyled>;
};

export default Footer;
