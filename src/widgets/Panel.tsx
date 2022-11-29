import React, {ReactNode} from 'react';
import styled from "styled-components";

interface PanelProps {
    size: number;
    children: ReactNode;
    className?: string;
}

const StyledPanel = styled.div<PanelProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    width: ${props => props.size ? `${props.size}%` : 'auto'};
`;

const Panel = ({size, children, className}: PanelProps) => {
    return (
        <StyledPanel
            size={size}
            className={className}
        >
            {children}
        </StyledPanel>
    );
};

export default Panel;