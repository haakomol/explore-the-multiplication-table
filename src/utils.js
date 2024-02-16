import { BOX_SIZE, GRID_OFFSET } from './constants';

export function roundToOneDecimal(value) {
  return +value.toFixed(1);
}

export function roundToTwoDecimals(value) {
  return +value.toFixed(2);
}

export function getIsMouseWithinGrid(xMouse, yMouse) {
  return (
    xMouse > GRID_OFFSET &&
    xMouse < GRID_OFFSET + BOX_SIZE * 10 &&
    yMouse > GRID_OFFSET &&
    yMouse < GRID_OFFSET + BOX_SIZE * 10
  );
}
