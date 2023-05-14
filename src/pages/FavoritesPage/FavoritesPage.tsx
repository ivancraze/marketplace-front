import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/favorites/selectors';

import ProductCard from 'components/ProductCard';
import { mockProducts } from 'mock/products';
import { ProductGroupContainerStyled } from './styled';
import { PageWrapperStyled } from 'styles/styled';

const FavoritesPage: React.FC = () => {
    const idsInFavorites = useSelector(selectFavorites);

    return (
        <>
            <Helmet>
                <title>Главная - MW Market</title>
            </Helmet>

            <PageWrapperStyled>
                <h2>Избранное</h2>

                {idsInFavorites.length ? (
                    <ProductGroupContainerStyled>
                        {mockProducts
                            .filter((p) => idsInFavorites.includes(p.id))
                            .map((p) => (
                                <ProductCard
                                    {...p}
                                    key={p.id}
                                    isLiked={false}
                                    hideLikes={true}
                                />
                            ))}
                    </ProductGroupContainerStyled>
                ) : (
                    <p>Пока в избранном ничего нет</p>
                )}
            </PageWrapperStyled>
        </>
    );
};

export default FavoritesPage;
