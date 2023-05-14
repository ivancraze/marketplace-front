import React from 'react';
import { Helmet } from 'react-helmet';

import { ProductGroupStyled, ProductGroupContainerStyled } from './styled';
import { PageWrapperStyled } from 'styles/styled';

import { mockProducts } from 'mock/products';
import ProductCard from 'components/ProductCard';

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Главная - Marketplace</title>
            </Helmet>
            <PageWrapperStyled>
                <ProductGroupStyled>
                    <h2>Рекомендуемые товары</h2>

                    <ProductGroupContainerStyled>
                        {mockProducts.map((p) => (
                            <ProductCard {...p} key={p.id} />
                        ))}
                    </ProductGroupContainerStyled>
                </ProductGroupStyled>
            </PageWrapperStyled>
        </>
    );
};

export default HomePage;
