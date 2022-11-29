import React from 'react';
import Panel from "../../widgets/Panel";
import useThemeContext from "../../hooks/useThemeContext";
import useLogsContext from "../../hooks/useLogsContext";
import {AppTheme} from "../../context/Theme";
import styled from "styled-components";
import ToggleThemeButton from "./ToggleThemeButton";
import FormMessage from "./FormMessage";
import Buttons from "./Buttons";

interface StyledPanelProps {
    theme: AppTheme;
}

const StyledPanel = styled(Panel)<StyledPanelProps>`
    height: 80vh;
    ${props => {
    if (props.theme === 'light') {
        return `
                background: #cecece;
                color: #2f4f4f;
            `;
    }

    return `
            background: white;
            color: #696969;
        `;
}}
`;

const StyledDivider = styled.hr`
    height: 2px;
    width: 80%;
    margin: 10px 0;
    background: #333333;
`;


const LeftPanel = () => {
    const {theme, toggleTheme} = useThemeContext();
    const {addLog} = useLogsContext();

    const handleToggleThemeChange = () => {
        addLog(theme === 'light'
            ? 'Theme was set to Dark'
            : 'Theme was set to Light');
        toggleTheme();
    };

    const handleMessageSubmit = (message: string) => {
        addLog(`Message Sent: ${message}`);
    };

    const handleOnButtonAdded = (buttonIndex: number) => {
        addLog(`Button ${buttonIndex} added`);
    };

    const handleOnButtonPressed = (buttonText: string) => {
        addLog(`Button ${buttonText} clicked`);
    };

    return (
        <StyledPanel
            size={45}
            theme={theme}
        >
            <ToggleThemeButton theme={theme} onClickHandler={handleToggleThemeChange} />
            <StyledDivider />
            <FormMessage onSubmit={handleMessageSubmit}/>
            <StyledDivider />
            <Buttons
                onButtonAdded={handleOnButtonAdded}
                onButtonPressed={handleOnButtonPressed}
            />
        </StyledPanel>
    );
};

export default LeftPanel;