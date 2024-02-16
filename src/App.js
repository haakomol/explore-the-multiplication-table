import React from 'react';
import styled from 'styled-components/macro';
import ReactCursorPosition from 'react-cursor-position';

import AppWithMousePosition from './AppWithMousePosition';
import './App.css';

export const APP_WIDTH = 950;
export const APP_HEIGHT = 600;

const Header = styled.h1`
  font-size: 40px;
  font-family: 'Open Sans', sans-serif;
`;

function App() {
  return (
    <div className="App">
      <div style={{ width: APP_WIDTH, height: APP_HEIGHT }}>
        <Header>
          Utforsk <em>gangetabellen</em>
        </Header>

        <ReactCursorPosition>
          <AppWithMousePosition />
        </ReactCursorPosition>
      </div>
    </div>
  );
}

export default App;
