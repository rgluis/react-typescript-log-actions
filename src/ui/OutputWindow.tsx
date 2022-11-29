import React from 'react';
import Panel from "../widgets/Panel";
import useLogsContext from "../hooks/useLogsContext";
import styled from "styled-components";
import {AppTheme} from "../context/Theme";
import useThemeContext from "../hooks/useThemeContext";

const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
});

interface StyledPanelProps {
    theme: AppTheme;
}

const StyledPanel = styled(Panel)<StyledPanelProps>`
    height: 80vh;
    overflow: auto;
    
    ${props => {
        if (props.theme === 'light') {
            return `
                background: white;
                color: #000000;
            `;
        }

        return `
            background: #008080;
            color: white;
        `;
    }}
`;

const OutputWindow = () => {
    const {logs} = useLogsContext();
    const {theme} = useThemeContext();

    return (
        <StyledPanel
            size={55}
            theme={theme}
        >
            <ul>
                {logs.map((log, index) =>
                    <li key={index}>{dateFormat.format(log.date)} {log.message}</li>
                )}
            </ul>
        </StyledPanel>
    );
};

export default OutputWindow;