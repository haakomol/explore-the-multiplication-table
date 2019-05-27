import React from 'react';
import styled from 'styled-components/macro';

import MultiGrid from './MultiGrid';
import './App.css';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';

export const APP_WIDTH = 950;
export const APP_HEIGHT = 600;

const Header = styled.h1`
  /* color: #11F; */
  font-size: 40px;
`;

function App() {
  return (
    <div className="App">
      <div style={{ width: APP_WIDTH, height: APP_HEIGHT }}>
        {/* <ReactCursorPosition activationInteractionMouse={INTERACTIONS.CLICK}>
          <Multi />
        </ReactCursorPosition> */}
        <Header>Utforsk <em>gangetabellen</em></Header>
        <ReactCursorPosition>
          <MultiGrid />
        </ReactCursorPosition>
      </div>
    </div>
  );
}

export default App;
