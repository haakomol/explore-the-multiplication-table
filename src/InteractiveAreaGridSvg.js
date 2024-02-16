import React from 'react';

import {
  MultiplicationFormula,
  SelectionRectFillUnderGrid,
  SelectionRectStrokeOverGrid,
  svgGrid,
} from './svg-components/common-svg-components';
import useAreaLogic from './useAreaLogic';
import { getIsMouseWithinGrid, roundToTwoDecimals } from './utils';
import {
  XFactorLengthMeasurement,
  YFactorLengthMeasurement,
} from './svg-components/area-svg-components';

function InteractiveAreaGridSvg({ xMouse, yMouse }) {
  const { xFactor, yFactor } = useAreaLogic(xMouse, yMouse);

  const showFactorRectanglesAndProblem = getIsMouseWithinGrid(xMouse, yMouse);

  return (
    <svg viewBox="0 0 950 600" xmlns="http://www.w3.org/2000/svg">
      {showFactorRectanglesAndProblem && (
        <SelectionRectFillUnderGrid
          xFactor={xFactor}
          yFactor={yFactor}
          isSelectedColor={false}
        />
      )}

      {svgGrid}

      {showFactorRectanglesAndProblem && (
        <>
          <SelectionRectStrokeOverGrid
            xFactor={xFactor}
            yFactor={yFactor}
            isSelectedColor={false}
          />

          <XFactorLengthMeasurement xFactor={xFactor} />
          <YFactorLengthMeasurement yFactor={yFactor} />

          <MultiplicationFormula
            xFactor={xFactor}
            yFactor={yFactor}
            product={roundToTwoDecimals(xFactor * yFactor)}
            revealProduct
            smallFont
          />
        </>
      )}
    </svg>
  );
}

export default InteractiveAreaGridSvg;
