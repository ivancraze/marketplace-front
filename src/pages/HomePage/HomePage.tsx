import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/favorites/selectors';

import { ProductGroupStyled, ProductGroupContainerStyled } from './styled';
import { PageWrapperStyled } from 'styles/styled';

import { mockProducts } from 'mock/products';
import ProductCard from 'components/ProductCard';

const HomePage: React.FC = () => {
    const idsInFavorites = useSelector(selectFavorites);

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
                            <ProductCard
                                {...p}
                                key={p.id}
                                isLiked={idsInFavorites.includes(p.id)}
                            />
                        ))}
                    </ProductGroupContainerStyled>
                </ProductGroupStyled>
            </PageWrapperStyled>
        </>
    );
};

export default HomePage;
