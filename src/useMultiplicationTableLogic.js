import { useCallback, useEffect, useMemo, useState } from 'react';
import { TweenMax, Back, Sine } from 'gsap';

import { BOX_SIZE, GRID_OFFSET } from './constants';
import { getIsMouseWithinGrid } from './utils';

const tableStates = {
  squareSelection: 'squareSelection',
  countingAnimation: 'countingAnimation',
  animationFinished: 'animationFinished',
};

function getTableFactorsForMousePosition(xMouse, yMouse) {
  const xFactorRoundedUpFromActiveSquare = Math.ceil(
    (xMouse - GRID_OFFSET) / BOX_SIZE
  );
  const yFactorRoundedUpFromActiveSquare = Math.ceil(
    (yMouse - GRID_OFFSET) / BOX_SIZE
  );

  return {
    xFactor: xFactorRoundedUpFromActiveSquare,
    yFactor: yFactorRoundedUpFromActiveSquare,
  };
}

function useMultiplicationTableLogic(xMouse, yMouse) {
  const [tableState, setTableState] = useState(tableStates.squareSelection);

  const hasSelectedSquareForTable = tableState !== tableStates.squareSelection;

  const [selectedXFactorForTable, setSelectedXFactorForTable] = useState(0);
  const [selectedYFactorForTable, setSelectedYFactorForTable] = useState(0);

  const isMouseWithinGrid = getIsMouseWithinGrid(xMouse, yMouse);

  let xFactorForMousePosition = 0;
  let yFactorForMousePosition = 0;

  if (isMouseWithinGrid) {
    const { xFactor, yFactor } = getTableFactorsForMousePosition(
      xMouse,
      yMouse
    );
    xFactorForMousePosition = xFactor;
    yFactorForMousePosition = yFactor;
  }

  const activeXFactor = hasSelectedSquareForTable
    ? selectedXFactorForTable
    : xFactorForMousePosition;
  const activeYFactor = hasSelectedSquareForTable
    ? selectedYFactorForTable
    : yFactorForMousePosition;

  const showSelectionRectangleAndProblem =
    isMouseWithinGrid || hasSelectedSquareForTable;

  const isCountingAnimationFinished =
    tableState === tableStates.animationFinished;

  // Event handler must be memoized (with useCallback) to avoid running animation
  // effect (below) on every render. (This hook is called on every InteractiveMultipTableSvg render,
  // which happens on every move move.)
  const handleAnimationComplete = useCallback(() => {
    if (hasSelectedSquareForTable) {
      setTableState(tableStates.animationFinished);
    }
  }, [hasSelectedSquareForTable]);

  const productForSelectedFactors =
    selectedXFactorForTable * selectedYFactorForTable;

  const { countNumberSvgTextRefs } = useCountingNumbersAnimationEffect(
    hasSelectedSquareForTable,
    productForSelectedFactors,
    handleAnimationComplete
  );

  function handleReset() {
    setTableState(tableStates.squareSelection);
    setSelectedXFactorForTable(0);
    setSelectedYFactorForTable(0);
  }

  const handleGridClick = () => {
    if (isMouseWithinGrid) {
      if (!hasSelectedSquareForTable) {
        setTableState(tableStates.countingAnimation);
        setSelectedXFactorForTable(xFactorForMousePosition);
        setSelectedYFactorForTable(yFactorForMousePosition);
      } else if (tableState === tableStates.animationFinished) {
        setTableState(tableStates.squareSelection);
        setSelectedXFactorForTable(0);
        setSelectedYFactorForTable(0);
      }
    }
  };

  return {
    activeXFactor,
    activeYFactor,
    showSelectionRectangleAndProblem,
    hasSelectedSquareForTable,
    isCountingAnimationFinished,
    countNumberSvgTextRefs,
    handleGridClick,
    handleReset,
  };
}

function useCountingNumbersAnimationEffect(
  hasSelectedSquareForTable,
  productForSelectedFactors,
  handleAnimationComplete
) {
  const countNumberSvgTextRefs = useMemo(
    () => Array.from({ length: productForSelectedFactors }),
    [productForSelectedFactors]
  );

  useEffect(() => {
    if (hasSelectedSquareForTable) {
      const animationDuration = 1 + productForSelectedFactors * 0.035;

      TweenMax.staggerTo(
        countNumberSvgTextRefs,
        0.4,
        {
          fontSize: '20px',
          ease: Back.easeOut.config(4.5),
          stagger: { ease: Sine.easeOut, amount: animationDuration },
        },
        null,
        handleAnimationComplete
      );
    }
  }, [
    hasSelectedSquareForTable,
    productForSelectedFactors,
    countNumberSvgTextRefs,
    handleAnimationComplete,
  ]);

  return { countNumberSvgTextRefs };
}

export default useMultiplicationTableLogic;
