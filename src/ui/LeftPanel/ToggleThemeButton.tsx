import React from 'react';
import Button from "../../widgets/Button";
import {AppTheme} from "../../context/Theme";

interface ToggleThemeButtonProps {
    theme: AppTheme;
    onClickHandler: () => void;
}

const ToggleThemeButton = ({theme, onClickHandler}: ToggleThemeButtonProps) => {
    return (
        <Button theme={theme} onClick={onClickHandler}>
            {theme === 'light'
                ? 'Set Dark Theme'
                : 'Set Light Theme'}
        </Button>
    );
};

export default ToggleThemeButton;