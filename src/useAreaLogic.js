import { BOX_SIZE, GRID_OFFSET } from './constants';
import { getIsMouseWithinGrid, roundToOneDecimal } from './utils';

function useAreaLogic(xMouse, yMouse) {
  let xFactor = 0;
  let yFactor = 0;

  const isMouseWithinGrid = getIsMouseWithinGrid(xMouse, yMouse);

  if (isMouseWithinGrid) {
    xFactor = roundToOneDecimal((xMouse - GRID_OFFSET) / BOX_SIZE);
    yFactor = roundToOneDecimal((yMouse - GRID_OFFSET) / BOX_SIZE);
  }

  return {
    xFactor,
    yFactor,
  };
}

export default useAreaLogic;
