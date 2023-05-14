import { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IProductDetails } from 'types';
import { mockProducts } from 'mock/products';
import { selectFavorites } from 'store/favorites/selectors';
import { addToFavorites, removeFromFavorites } from 'store/favorites/reducer';

import {
    ImageStyled,
    ImagesWrapperStyled,
    InfoWrapperStyled,
    LikeWrapperStyled,
    PriceDiscountedStyled,
    PriceRegularStyled,
    PriceRegularWhenDiscountedStyled,
    PriceWrapperStyled,
    WrapperStyled,
} from './styled';
import { ReactComponent as HeartEmpty } from './assets/heart-empty.svg';
import { ReactComponent as HeartFilled } from './assets/heart-filled.svg';
import { PageWrapperStyled } from 'styles/styled';

const ProductDetailsPage: React.FC = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const [productDetails, setProductDetails] = useState<IProductDetails>();

    useEffect(() => {
        const found = mockProducts.find((p) =>
            [String(p.id), p.slug].includes(params.idOrSlug),
        );

        if (found) setProductDetails(found);
    }, [params.idOrSlug]);

    const idsInFavorites = useSelector(selectFavorites);

    const isLiked = useMemo(
        () => idsInFavorites.includes(productDetails?.id!),
        [idsInFavorites, productDetails],
    );

    const handleFavorites = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            const { productId } = e.currentTarget.dataset;

            dispatch(
                !idsInFavorites.includes(+productId!)
                    ? addToFavorites(+productId!)
                    : removeFromFavorites(+productId!),
            );
        },
        [dispatch, idsInFavorites],
    );

    if (!productDetails) return null;

    const { id, imgSrc, title, desc, priceRegular, priceDiscounted } =
        productDetails;

    return (
        <>
            <Helmet>
                <title>Главная - KPL Market</title>
            </Helmet>

            <PageWrapperStyled>
                <WrapperStyled>
                    <ImagesWrapperStyled>
                        <ImageStyled src={imgSrc} />

                        <LikeWrapperStyled
                            data-product-id={id}
                            onClick={handleFavorites}
                        >
                            {isLiked ? <HeartFilled /> : <HeartEmpty />}
                        </LikeWrapperStyled>
                    </ImagesWrapperStyled>

                    <InfoWrapperStyled>
                        <h1>{title}</h1>
                        <p>{desc}</p>

                        <PriceWrapperStyled>
                            {Number.isInteger(priceDiscounted) ? (
                                <>
                                    <PriceDiscountedStyled>
                                        {priceDiscounted} ₽
                                    </PriceDiscountedStyled>
                                    <PriceRegularWhenDiscountedStyled>
                                        {priceRegular} ₽
                                    </PriceRegularWhenDiscountedStyled>
                                </>
                            ) : (
                                <PriceRegularStyled>
                                    {priceRegular} ₽
                                </PriceRegularStyled>
                            )}
                        </PriceWrapperStyled>
                    </InfoWrapperStyled>
                </WrapperStyled>
            </PageWrapperStyled>
        </>
    );
};

export default ProductDetailsPage;
