import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'components/common/Button';
import { addToFavorites, removeFromFavorites } from 'store/favorites/reducer';
import { ReactComponent as HeartEmpty } from './assets/heart-empty.svg';
import { ReactComponent as HeartFilled } from './assets/heart-filled.svg';
import {
    WrapperStyled,
    LikeWrapperStyled,
    ImageStyled,
    PriceWrapperStyled,
    PriceRegularStyled,
    PriceRegularWhenDiscountedStyled,
    PriceDiscountedStyled,
    TitleStyled,
    DescStyled,
    BtnsWrapperStyled,
} from './styled';
import * as path from 'path';
import { paths } from '../../routes/helpers';

interface IProductCardProps {
    id: number;
    slug?: string;
    imgSrc: string;
    priceRegular: number;
    priceDiscounted?: number;
    title: string;
    desc: string;
    isLiked: boolean;
    hideLikes?: boolean;
}

const ProductCard: React.FC<IProductCardProps> = ({
    id,
    slug,
    imgSrc,
    priceRegular,
    priceDiscounted,
    title,
    desc,
    isLiked,
    hideLikes = false,
}) => {
    const dispatch = useDispatch();

    const handleFavorites = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            const { productId } = e.currentTarget.dataset;

            dispatch(
                !isLiked
                    ? addToFavorites(+productId!)
                    : removeFromFavorites(+productId!),
            );
        },
        [dispatch, isLiked],
    );

    const isFavoritesPage = useMemo(
        () => location.pathname === paths.favorites,
        [location.pathname],
    );

    const removeFavorite = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            dispatch(removeFromFavorites(+e.currentTarget.dataset.productId!));
        },
        [dispatch],
    );

    return (
        <WrapperStyled>
            {!hideLikes && (
                <LikeWrapperStyled
                    data-product-id={id}
                    onClick={handleFavorites}
                >
                    {isLiked ? <HeartFilled /> : <HeartEmpty />}
                </LikeWrapperStyled>
            )}

            <Link to={`/product/${slug || id}`}>
                <ImageStyled src={imgSrc} />
            </Link>

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
                    <PriceRegularStyled>{priceRegular} ₽</PriceRegularStyled>
                )}
            </PriceWrapperStyled>

            <TitleStyled className="h4">
                <Link to={`/product/${slug || id}`}>{title}</Link>
            </TitleStyled>

            <DescStyled>{desc}</DescStyled>

            <BtnsWrapperStyled>
                <Button block>В корзину</Button>

                {isFavoritesPage && (
                    <Button
                        type="danger"
                        block
                        onClick={removeFavorite}
                        data-product-id={id}
                    >
                        Удалить
                    </Button>
                )}
            </BtnsWrapperStyled>
        </WrapperStyled>
    );
};

export default ProductCard;
