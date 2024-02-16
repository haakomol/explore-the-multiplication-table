import React, { useState } from 'react';

import { GRID_OFFSET } from './constants';
import InteractiveMultipTableSvg from './InteractiveMultipTableSvg';
import InteractiveAreaGridSvg from './InteractiveAreaGridSvg';

const exploreModes = {
  multiplicationTable: 'multiplicationTable',
  area: 'area',
};

const AppWithMousePosition = ({ position: { x: xMouse, y: yMouse } }) => {
  const [exploreMode, setExploreMode] = useState(
    exploreModes.multiplicationTable
  );

  const isTableMode = exploreMode === exploreModes.multiplicationTable;
  const isAreaMode = exploreMode === exploreModes.area;

  function handleSwitchMode() {
    setExploreMode((exploreMode) =>
      exploreMode === exploreModes.multiplicationTable
        ? exploreModes.area
        : exploreModes.multiplicationTable
    );
  }

  return (
    <>
      {isTableMode && (
        <InteractiveMultipTableSvg xMouse={xMouse} yMouse={yMouse} />
      )}

      {isAreaMode && <InteractiveAreaGridSvg xMouse={xMouse} yMouse={yMouse} />}

      <button
        onClick={handleSwitchMode}
        style={{ marginTop: '20px', marginLeft: GRID_OFFSET, fontSize: '18px' }}
      >
        {isTableMode ? 'Utforsk gangetabellen' : 'Utforsk areal'}
      </button>
    </>
  );
};

export default AppWithMousePosition;
