import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { paths } from 'routes/helpers';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { selectIsLogged } from 'store/appStore/selectors';
import { selectFavorites } from 'store/favorites/selectors';
import UserDropdownMenu from './components/UserDropdownMenu/UserDropdownMenu';
import logoPng from './assets/logo.png';

import {
    WrapperStyled,
    LeftSideStyled,
    LogoStyled,
    BurgerStyled,
    SearchWrapperStyled,
    BtnSearchStyled,
    RightSideStyled,
    BtnOrdersStyled,
    BtnFavoritesStyled,
    BtnNotificationsStyled,
    BtnCartStyled,
} from './styled';

const Header: React.FC = () => {
    // const location = useLocation()

    const isLogged = useSelector(selectIsLogged);
    const favorites = useSelector(selectFavorites);

    const [searchInput, setSearchInput] = useState<string>('');

    const changeSearchInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
        },
        [],
    );

    // if (
    //   location.pathname.includes(paths.login)
    //   || location.pathname.includes(paths.register)
    //   || location.pathname.includes(paths.requestPasswordRecovery)
    //   || location.pathname.includes(paths.confirmPasswordRecovery)
    // ) return null

    return (
        <WrapperStyled>
            <LeftSideStyled>
                <Link to={paths.home}>
                    <LogoStyled src={logoPng} />
                </Link>

                <Button>
                    <BurgerStyled>
                        <div />
                        <div />
                        <div />
                    </BurgerStyled>

                    <span>Каталог</span>
                </Button>
            </LeftSideStyled>

            <SearchWrapperStyled>
                <Input
                    value={searchInput}
                    onChange={changeSearchInput}
                    isGhost
                    placeholder="Поиск товаров"
                />

                <BtnSearchStyled />
            </SearchWrapperStyled>

            <RightSideStyled>
                {isLogged ? (
                    <>
                        <BtnOrdersStyled />
                        <BtnFavoritesStyled count={favorites.length} />
                        <BtnNotificationsStyled />
                        <BtnCartStyled />
                        <UserDropdownMenu />
                    </>
                ) : (
                    <Link to={paths.login}>&nbsp;&nbsp;&nbsp; Войти</Link>
                )}
            </RightSideStyled>
        </WrapperStyled>
    );
};

export default Header;
