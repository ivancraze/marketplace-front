import React, { useState } from 'react';

import {
    WrapperStyled,
    InputItselfStyled,
    LabelStyled,
    TogglePasswordVisibilityStyled,
} from './styled';

interface IInputProps {
    value: string;
    name?: string;
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | 'date';
    isGhost?: boolean;
    autocomplete?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

const Input: React.FC<IInputProps> = ({
    value,
    onChange = () => undefined,
    onFocus = () => undefined,
    name,
    label,
    placeholder,
    type = 'text',
    isGhost = false,
    autocomplete,
    icon,
    disabled,
}) => {
    const [passVisibile, setPassVisible] = useState<boolean>(false);
    const handleTogglePassVisible = () =>
        setPassVisible((prevState) => !prevState);

    const inputItself = (
        <InputItselfStyled
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            type={type === 'password' && passVisibile ? 'text' : type}
            placeholder={placeholder}
            value={value}
            isGhost={isGhost}
            autoComplete={autocomplete || ''}
            icon={icon}
            disabled={disabled}
        />
    );

    const togglePassword = (
        <TogglePasswordVisibilityStyled
            passwordVisibility={passVisibile}
            onClick={handleTogglePassVisible}
        />
    );
    return (
        <WrapperStyled>
            {label ? (
                <LabelStyled>
                    <div>
                        <p>{label}</p>
                        {inputItself}
                        {type === 'password' && togglePassword}
                    </div>

                    {icon && <i>{icon}</i>}
                </LabelStyled>
            ) : (
                <>
                    {inputItself}
                    {type === 'password' && togglePassword}
                </>
            )}
        </WrapperStyled>
    );
};

export default Input;
