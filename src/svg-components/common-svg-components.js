import React from 'react';
import styled from 'styled-components/macro';

import {
  GRID_OFFSET,
  BOX_SIZE,
  GRID_STROKE_WIDTH,
  GRID_STROKE_COLOR,
  AREA_RECT_FILL_COLOR_HOVER,
  AREA_RECT_STROKE_COLOR_HOVER,
  AREA_RECT_STROKE_WIDTH,
  AREA_RECT_FILL_COLOR_SELECTED,
  AREA_RECT_STROKE_COLOR_SELECTED,
  HIGHLIGHTED_LEGEND_NUMBER_COLOR,
  FORMULA_OFFSET_X,
  FORMULA_OFFSET_Y,
} from '../constants';

export const svgGrid = (
  <g stroke={GRID_STROKE_COLOR}>
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 0 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 1 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 1 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 2 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 2 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 3 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 3 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 4 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 4 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 5 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 5 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 6 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 6 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 7 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 7 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 8 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 8 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 9 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 9 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 10 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 0 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 0 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 1 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 1 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 2 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 2 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 3 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 3 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 4 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 4 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 5 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 5 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 6 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 6 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 7 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 7 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 8 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 8 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 9 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 9 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
    <line
      x1={GRID_OFFSET + 0 * BOX_SIZE}
      y1={GRID_OFFSET + 10 * BOX_SIZE}
      x2={GRID_OFFSET + 10 * BOX_SIZE}
      y2={GRID_OFFSET + 10 * BOX_SIZE}
      strokeWidth={GRID_STROKE_WIDTH}
    />
  </g>
);

export function SelectionRectFillUnderGrid({
  xFactor,
  yFactor,
  isSelectedColor,
}) {
  return (
    <rect
      x={GRID_OFFSET}
      y={GRID_OFFSET}
      width={xFactor * BOX_SIZE}
      height={yFactor * BOX_SIZE}
      fill={
        isSelectedColor
          ? AREA_RECT_FILL_COLOR_SELECTED
          : AREA_RECT_FILL_COLOR_HOVER
      }
    />
  );
}

export const LegendNumbersText = styled.text`
  font-size: 20px;
  fill: ${(props) =>
    props.isHighlighted ? HIGHLIGHTED_LEGEND_NUMBER_COLOR : 'inherit'};
`;

export function SelectionRectStrokeOverGrid({
  xFactor,
  yFactor,
  isSelectedColor,
}) {
  return (
    <rect
      x={GRID_OFFSET}
      y={GRID_OFFSET}
      width={xFactor * BOX_SIZE}
      height={yFactor * BOX_SIZE}
      fill="none"
      stroke={
        isSelectedColor
          ? AREA_RECT_STROKE_COLOR_SELECTED
          : AREA_RECT_STROKE_COLOR_HOVER
      }
      strokeWidth={AREA_RECT_STROKE_WIDTH}
      rx={2}
      ry={2}
    />
  );
}

const FormulaText = styled.text`
  font-size: ${(props) => (props.smallFont ? '40px' : '60px')};
`;

export const MultiplicationFormula = ({
  xFactor,
  yFactor,
  revealProduct,
  product,
  smallFont = false,
}) => (
  <FormulaText
    x={GRID_OFFSET + BOX_SIZE * 10 + FORMULA_OFFSET_X}
    y={GRID_OFFSET + FORMULA_OFFSET_Y}
    dominantBaseline="middle"
    smallFont={smallFont}
  >
    {xFactor} ⋅ {yFactor} = {revealProduct ? product : '?'}
  </FormulaText>
);
