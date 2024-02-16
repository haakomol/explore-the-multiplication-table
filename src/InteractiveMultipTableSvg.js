import React from 'react';
import {
  MultiplicationFormula,
  SelectionRectFillUnderGrid,
  SelectionRectStrokeOverGrid,
  svgGrid,
} from './svg-components/common-svg-components';
import {
  AnimatedCountNumbersSvgTexts,
  HighlightedProductSquareInCountRectangle,
  ResetButton,
  XLegendNumbers,
  YLegendNumbers,
} from './svg-components/multiplication-table-svg-components';
import useMultiplicationTableLogic from './useMultiplicationTableLogic';

function InteractiveMultipTableSvg({ xMouse, yMouse }) {
  const {
    activeXFactor,
    activeYFactor,
    showSelectionRectangleAndProblem,
    hasSelectedSquareForTable,
    isCountingAnimationFinished,
    countNumberSvgTextRefs,
    handleGridClick,
    handleReset,
  } = useMultiplicationTableLogic(xMouse, yMouse);

  return (
    <svg
      viewBox="0 0 950 600"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleGridClick}
    >
      {showSelectionRectangleAndProblem && (
        <>
          <SelectionRectFillUnderGrid
            xFactor={activeXFactor}
            yFactor={activeYFactor}
            isSelectedColor={hasSelectedSquareForTable}
          />
          <HighlightedProductSquareInCountRectangle
            xFactor={activeXFactor}
            yFactor={activeYFactor}
            isSelectedColor={hasSelectedSquareForTable}
          />
        </>
      )}

      {svgGrid}

      <XLegendNumbers highlightedNumber={activeXFactor} />
      <YLegendNumbers highlightedNumber={activeYFactor} />

      {showSelectionRectangleAndProblem && (
        <>
          <SelectionRectStrokeOverGrid
            xFactor={activeXFactor}
            yFactor={activeYFactor}
            isSelectedColor={hasSelectedSquareForTable}
          />

          <MultiplicationFormula
            xFactor={activeXFactor}
            yFactor={activeYFactor}
            product={activeXFactor * activeYFactor}
            revealProduct={isCountingAnimationFinished}
          />

          {hasSelectedSquareForTable && (
            <AnimatedCountNumbersSvgTexts
              xFactor={activeXFactor}
              yFactor={activeYFactor}
              countNumberSvgTextRefs={countNumberSvgTextRefs}
            />
          )}

          {isCountingAnimationFinished && <ResetButton onClick={handleReset} />}
        </>
      )}
    </svg>
  );
}

export default InteractiveMultipTableSvg;
