import React, { useState, useCallback, useMemo } from 'react';

import { BOX_SIZE, GRID_OFFSET } from './constants';
import {
  svgGrid,
  XFactorMeasurement,
  YFactorMeasurement,
  MultiplicationFormula,
  HoverUnderlayFillRect,
  HoverOverlayStrokeRect,
  AnimatedCountNumbers,
  XLegendNumbers,
  YLegendNumbers,
  ResetButton,
} from './svgParts';

export function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const MultiGrid = ({ position: { x: xMouse, y: yMouse } }) => {
  const [isAreaExplore, setIsAreaExplore] = useState(false);
  const [interactionState, setInteractionState] = useState('hoverSelection');

  const [selectedXFactor, setSelectedXFactor] = useState(0);
  const [selectedYFactor, setSelectedYFactor] = useState(0);

  const isMouseWithinGrid =
    xMouse > GRID_OFFSET &&
    xMouse < GRID_OFFSET + BOX_SIZE * 10 &&
    (yMouse > GRID_OFFSET && yMouse < GRID_OFFSET + BOX_SIZE * 10);

  let xFactor = interactionState !== 'hoverSelection' ? selectedXFactor : 0;
  let yFactor = interactionState !== 'hoverSelection' ? selectedYFactor : 0;

  if (!isAreaExplore) {
    if (isMouseWithinGrid && interactionState === 'hoverSelection') {
      xFactor = Math.floor((xMouse - GRID_OFFSET) / BOX_SIZE) + 1;
      yFactor = Math.floor((yMouse - GRID_OFFSET) / BOX_SIZE) + 1;
    }
  } else {
    if (isMouseWithinGrid) {
      xFactor = round((xMouse - GRID_OFFSET) / BOX_SIZE, 1);
      yFactor = round((yMouse - GRID_OFFSET) / BOX_SIZE, 1);
    }
  }

  const handleGridClick = useCallback(() => {
    if (isMouseWithinGrid && !isAreaExplore) {
      if (interactionState === 'hoverSelection') {
        setInteractionState('countToProduct');
        setSelectedXFactor(xFactor);
        setSelectedYFactor(yFactor);
      } else if (interactionState === 'countingFinnished') {
        setInteractionState('hoverSelection');
        setSelectedXFactor(0);
        setSelectedYFactor(0);
      }
    }
  }, [isMouseWithinGrid, xFactor, yFactor, interactionState, isAreaExplore]);

  const handleSwitchMode = useCallback(() => {
    if (interactionState !== 'countToProduct') {
      setIsAreaExplore(isAreaExplore => !isAreaExplore);
      setInteractionState('hoverSelection');
    }
  }, [interactionState]);

  const showInteractionElements =
    (interactionState === 'hoverSelection' && isMouseWithinGrid) ||
    interactionState !== 'hoverSelection';

  const svgRender = useMemo(() => {
    console.log('memo-render MultiGrid');
    console.log(interactionState);
    return (
      <svg
        viewBox="0 0 950 600"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleGridClick}
      >
        {showInteractionElements && (
          <HoverUnderlayFillRect
            xFactor={xFactor}
            yFactor={yFactor}
            isSelected={interactionState !== 'hoverSelection'}
            highlightProductBox={!isAreaExplore}
          />
        )}
        {svgGrid}
        {!isAreaExplore && (
          <>
            <XLegendNumbers highlightedNumber={xFactor} />
            <YLegendNumbers highlightedNumber={yFactor} />
          </>
        )}
        {showInteractionElements && (
          <>
            <HoverOverlayStrokeRect
              xFactor={xFactor}
              yFactor={yFactor}
              isSelected={interactionState !== 'hoverSelection'}
            />
            {isAreaExplore && (
              <>
                <XFactorMeasurement xFactor={xFactor} />
                <YFactorMeasurement yFactor={yFactor} />
              </>
            )}
            <MultiplicationFormula
              xFactor={xFactor}
              yFactor={yFactor}
              product={
                isAreaExplore ? round(xFactor * yFactor, 2) : xFactor * yFactor
              }
              revealProduct={
                isAreaExplore || interactionState === 'countingFinnished'
              }
              smallFont={isAreaExplore}
            />
            {!isAreaExplore && interactionState !== 'hoverSelection' && (
              <AnimatedCountNumbers
                xFactor={xFactor}
                yFactor={yFactor}
                onComplete={() => {
                  if (interactionState !== 'hoverSelection') {
                    setInteractionState('countingFinnished');
                  }
                }}
              />
            )}
            {interactionState === 'countingFinnished' && (
              <ResetButton
                onClick={() => {
                  if (interactionState === 'countingFinnished') {
                    setInteractionState('hoverSelection');
                    setSelectedXFactor(0);
                    setSelectedYFactor(0);
                  }
                }}
              />
            )}
          </>
        )}
      </svg>
    );
  }, [
    xFactor,
    yFactor,
    interactionState,
    showInteractionElements,
    handleGridClick,
    isAreaExplore,
  ]);

  return (
    <>
      {svgRender}
      <button
        onClick={handleSwitchMode}
        disabled={interactionState === 'countToProduct'}
        style={{ marginTop: '20px', marginLeft: GRID_OFFSET, fontSize: '18px' }}
      >
        {isAreaExplore ? 'Utforsk gangetabellen' : 'Utforsk areal'}
      </button>
    </>
  );
};

export default MultiGrid;
