import React from 'react';
import { Helmet } from 'react-helmet';

import { TitleStyled } from './styled';

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Главная - Marketplace</title>
            </Helmet>

            <TitleStyled>Главная страница</TitleStyled>
        </>
    );
};

export default HomePage;
