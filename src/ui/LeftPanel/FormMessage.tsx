import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import Button from "../../widgets/Button";

interface FormMessageProps {
    onSubmit: (message: string) => void;
}

const StyledFormContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  margin-bottom: 5px;
`
;
const FormMessage = ({onSubmit}: FormMessageProps) => {
    const [message, setMessage] = useState<string>("");

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        onSubmit(message);
        setMessage("");
    };

    return (
        <StyledFormContainer>
            <StyledTextarea
                rows={10}
                cols={40}
                value={message}
                onChange={handleTextareaChange}
            />
            <Button onClick={handleSendMessage} disabled={!message.length}>
                Send Message
            </Button>
        </StyledFormContainer>
    );
};

export default FormMessage;