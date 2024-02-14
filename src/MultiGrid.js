import React, { useState, useCallback, useMemo } from 'react';

import { BOX_SIZE, GRID_OFFSET } from './constants';
import {
  svgGrid,
  XFactorMeasurement,
  YFactorMeasurement,
  MultiplicationFormula,
  HoverFillRectUnderlay,
  HoverStrokeRectOverlay,
  AnimatedCountNumbers,
  XLegendNumbers,
  YLegendNumbers,
  ResetButton,
} from './svg-components/svgParts';
import { roundToOneDecimal } from './utils';

const exploreModes = {
  multiplicationTable: 'multiplicationTable',
  area: 'area',
};

const multiTableStates = {
  selectFactors: 'selectFactors',
  countingAnimation: 'countingAnimation',
  animationFinished: 'animationFinished',
};

const MultiGrid = ({ position: { x: xMouse, y: yMouse } }) => {
  const [exploreMode, setExploreMode] = useState(
    exploreModes.multiplicationTable
  );
  const [multiTableState, setMultiTableState] = useState(
    multiTableStates.selectFactors
  );

  const [selectedXFactorTableMode, setSelectedXFactorTableMode] = useState(0);
  const [selectedYFactorTableMode, setSelectedYFactorTableMode] = useState(0);

  const isMouseWithinGrid =
    xMouse > GRID_OFFSET &&
    xMouse < GRID_OFFSET + BOX_SIZE * 10 &&
    yMouse > GRID_OFFSET &&
    yMouse < GRID_OFFSET + BOX_SIZE * 10;

  let xFactor =
    multiTableState !== multiTableStates.selectFactors
      ? selectedXFactorTableMode
      : 0;
  let yFactor =
    multiTableState !== multiTableStates.selectFactors
      ? selectedYFactorTableMode
      : 0;

  switch (exploreMode) {
    case exploreModes.multiplicationTable: {
      if (
        isMouseWithinGrid &&
        multiTableState === multiTableStates.selectFactors
      ) {
        xFactor = Math.floor((xMouse - GRID_OFFSET) / BOX_SIZE) + 1;
        yFactor = Math.floor((yMouse - GRID_OFFSET) / BOX_SIZE) + 1;
      }
      break;
    }
    case exploreModes.area: {
      if (isMouseWithinGrid) {
        xFactor = roundToOneDecimal((xMouse - GRID_OFFSET) / BOX_SIZE);
        yFactor = roundToOneDecimal((yMouse - GRID_OFFSET) / BOX_SIZE);
      }
      break;
    }
    default: {
    }
  }

  const handleGridClick = useCallback(() => {
    if (isMouseWithinGrid && exploreMode === exploreModes.multiplicationTable) {
      if (multiTableState === multiTableStates.selectFactors) {
        setMultiTableState(multiTableStates.countingAnimation);
        setSelectedXFactorTableMode(xFactor);
        setSelectedYFactorTableMode(yFactor);
      } else if (multiTableState === multiTableStates.animationFinished) {
        setMultiTableState(multiTableStates.selectFactors);
        setSelectedXFactorTableMode(0);
        setSelectedYFactorTableMode(0);
      }
    }
  }, [isMouseWithinGrid, xFactor, yFactor, multiTableState, exploreMode]);

  const handleSwitchMode = useCallback(() => {
    if (multiTableState !== multiTableStates.countingAnimation) {
      setExploreMode((interactionMode) =>
        interactionMode === exploreModes.multiplicationTable
          ? exploreModes.area
          : exploreModes.multiplicationTable
      );
      setMultiTableState(multiTableStates.selectFactors);
    }
  }, [multiTableState]);

  const showInteractionElements =
    (multiTableState === multiTableStates.selectFactors && isMouseWithinGrid) ||
    multiTableState !== multiTableStates.selectFactors;

  const svgRender = useMemo(
    () => (
      <svg
        viewBox="0 0 950 600"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleGridClick}
      >
        {showInteractionElements && (
          <HoverFillRectUnderlay
            xFactor={xFactor}
            yFactor={yFactor}
            isSelected={multiTableState !== multiTableStates.selectFactors}
            highlightProductBox={
              exploreMode === exploreModes.multiplicationTable
            }
          />
        )}
        {svgGrid}

        {exploreMode === exploreModes.multiplicationTable && (
          <>
            <XLegendNumbers highlightedNumber={xFactor} />
            <YLegendNumbers highlightedNumber={yFactor} />
          </>
        )}

        {showInteractionElements && (
          <>
            <HoverStrokeRectOverlay
              xFactor={xFactor}
              yFactor={yFactor}
              isSelected={multiTableState !== multiTableStates.selectFactors}
            />

            {exploreMode === exploreModes.area && (
              <>
                <XFactorMeasurement xFactor={xFactor} />
                <YFactorMeasurement yFactor={yFactor} />
              </>
            )}

            <MultiplicationFormula
              xFactor={xFactor}
              yFactor={yFactor}
              product={
                exploreMode === exploreModes.area
                  ? roundToOneDecimal(xFactor * yFactor, 2)
                  : xFactor * yFactor
              }
              revealProduct={
                exploreMode === exploreModes.area ||
                multiTableState === multiTableStates.animationFinished
              }
              smallFont={exploreMode === exploreModes.area}
            />

            {exploreMode === exploreModes.multiplicationTable &&
              multiTableState !== multiTableStates.selectFactors && (
                <AnimatedCountNumbers
                  xFactor={xFactor}
                  yFactor={yFactor}
                  onComplete={() => {
                    if (multiTableState !== multiTableStates.selectFactors) {
                      setMultiTableState(multiTableStates.animationFinished);
                    }
                  }}
                />
              )}

            {multiTableState === multiTableStates.animationFinished && (
              <ResetButton
                onClick={() => {
                  if (multiTableState === multiTableStates.animationFinished) {
                    setMultiTableState(multiTableStates.selectFactors);
                    setSelectedXFactorTableMode(0);
                    setSelectedYFactorTableMode(0);
                  }
                }}
              />
            )}
          </>
        )}
      </svg>
    ),
    [
      xFactor,
      yFactor,
      multiTableState,
      showInteractionElements,
      handleGridClick,
      exploreMode,
    ]
  );

  return (
    <>
      {svgRender}
      <button
        onClick={handleSwitchMode}
        disabled={multiTableState === multiTableStates.countingAnimation}
        style={{ marginTop: '20px', marginLeft: GRID_OFFSET, fontSize: '18px' }}
      >
        {exploreMode ? 'Utforsk gangetabellen' : 'Utforsk areal'}
      </button>
    </>
  );
};

export default MultiGrid;
