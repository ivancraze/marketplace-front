import { useState, useCallback, useRef, FC } from 'react';
import { useOnClickOutside } from 'utils/hooks';
import { WrapperStyled, DropdownWrapperStyled } from './styled';

interface IDropdownPanel {
    toggler: any;
    children: React.ReactElement;
    toLeft?: boolean;
}

const DropdownPanel: FC<IDropdownPanel> = ({
    toggler,
    children,
    toLeft = false,
}: IDropdownPanel) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const dropdownWrapperRef = useRef(null);

    const toggleVisible = useCallback(() => {
        setIsVisible((isVisible) => !isVisible);
    }, []);

    useOnClickOutside(dropdownWrapperRef, toggleVisible);

    const Toggler = toggler;

    return (
        <WrapperStyled>
            <Toggler onClick={toggleVisible} />

            {isVisible && (
                <DropdownWrapperStyled ref={dropdownWrapperRef} toLeft={toLeft}>
                    {children}
                </DropdownWrapperStyled>
            )}
        </WrapperStyled>
    );
};

export default DropdownPanel;
