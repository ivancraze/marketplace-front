import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { paths } from 'routes/helpers';
import { selectUserData } from 'store/userStore/selectors';

import DropdownPanel from 'components/common/DropdownPanel';
import UserAvatar from '../UserAvatar';
import { UserProfileDropdownStyled } from '../../styled';

const UserDropdownMenu: React.FC = () => {
    const navigate = useNavigate();

    const { nameFirst, nameLast, displayName } = useSelector(selectUserData);

    const handleLogout = useCallback(() => navigate(paths.logout), [navigate]);

    return (
        <DropdownPanel
            toggler={(props) => <UserAvatar onClick={props.onClick} />}
            toLeft
        >
            <UserProfileDropdownStyled>
                <div>
                    <strong>{displayName || nameFirst + ' ' + nameLast}</strong>
                </div>

                <hr />

                <div>Заказы</div>
                <div>Возвраты</div>
                <div>Избранное</div>
                <div>Справка</div>
                <div>Поддержка</div>
                <div>Настройки</div>

                <hr />

                <div onClick={handleLogout}>Выйти</div>
            </UserProfileDropdownStyled>
        </DropdownPanel>
    );
};

export default UserDropdownMenu;
