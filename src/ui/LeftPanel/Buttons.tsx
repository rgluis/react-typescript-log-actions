import React, {MouseEvent, useState} from 'react';
import Button from "../../widgets/Button";
import styled from "styled-components";

interface ButtonsProps {
    onButtonAdded: (buttonIndex: number) => void;
    onButtonPressed: (buttonIndex: string) => void;
}

const StyledButtonsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;

const StyledAddButton = styled(Button)`
    background: darkorange;
    color: white;
`;

const StyledListOfButtons = styled.div`
    margin-top: 10px;
`;

const StyledButton = styled(Button)`
    background: brown;
    color: white;
    margin-right: 5px;
`;

const Buttons = ({onButtonAdded, onButtonPressed}: ButtonsProps) => {
    const [buttons, setButtons] = useState<number[]>([]);

    const handleAddButton = () => {
        onButtonAdded(buttons.length + 1);
        setButtons([
            ...buttons,
            buttons.length + 1
        ]);
    };

    const handlePressedButton = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as Element;
        const key = target.getAttribute('data-key');
        onButtonPressed(key ?? "");
    };

    return (
        <StyledButtonsContainer>
            <StyledAddButton onClick={handleAddButton}>
                Add Button {buttons.length + 1}
            </StyledAddButton>
            <StyledListOfButtons>
                {buttons.map(button => (
                    <StyledButton key={button} data-key={button} onClick={handlePressedButton}>
                        Button {button}
                    </StyledButton>
                ))}
            </StyledListOfButtons>
        </StyledButtonsContainer>
    );
};

export default Buttons;