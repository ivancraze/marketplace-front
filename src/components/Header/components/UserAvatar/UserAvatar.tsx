import { UserAvatarWrapperStyled } from '../../styled';

interface IDropdownPanelProps {
    onClick: () => void;
}

const UserAvatar: React.FC<IDropdownPanelProps> = (props) => {
    return (
        <UserAvatarWrapperStyled onClick={props.onClick}>
            <img src="https://i.pravatar.cc/46" alt="User ava" />
        </UserAvatarWrapperStyled>
    );
};

export default UserAvatar;
