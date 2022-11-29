import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import styled from "styled-components";
import {AppTheme} from "../context/Theme";

interface ButtonProps {
    children: ReactNode;
    theme?: AppTheme;
}

const StyledButton = styled.button<Pick<ButtonProps, 'theme'>>`
    padding: 8px 12px;
    line-height: 1;
    font-size: 14px;
    width: auto;
    display: inline-block;
    ${props => {
        if (props.disabled) {
            return `
                background: #D8D8D8;
                color: #8F8F8F;           
            `;
        }
        
        if (!Object.keys(props.theme).length) {
            return `
                background: #4B7C8C;
                color: white;
            `;
        }
        
        if (props.theme === 'light') {
            return `
                background: #cc0000;
                color: white;
            `;
        }
        
        return `
            background: #f0f8ff;
            color: #800080;
        `;
    }}
`;

const Button = ({theme, children, ...props}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <StyledButton
            theme={theme}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;