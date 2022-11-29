import React from 'react';
import styled from "styled-components";
import LeftPanel from "./ui/LeftPanel/LeftPanel";
import OutputWindow from "./ui/OutputWindow";

const StyledMainContainer = styled.div`
    background: #333333;
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledPanelContainers = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
  return (
    <StyledMainContainer>
        <StyledPanelContainers>
            <LeftPanel />
            <OutputWindow />
        </StyledPanelContainers>
    </StyledMainContainer>
  );
}

export default App;
