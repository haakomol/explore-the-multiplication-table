import React, { memo, useMemo } from 'react';
import styled from 'styled-components/macro';

import { LegendNumbersText } from './common-svg-components';
import {
  AREA_RECT_FILL_COLOR_HOVER,
  BOX_SIZE,
  GRID_OFFSET,
  GRID_STROKE_COLOR,
  PRODUCT_SQUARE_FILL_COLOR_HOVER,
} from '../constants';

const RESET_BUTTON_OFFSET_X = 50;
const RESET_BUTTON_OFFSET_Y = 60;

export function HighlightedProductSquareInCountRectangle({
  xFactor,
  yFactor,
  isSelectedColor,
}) {
  return (
    <rect
      x={GRID_OFFSET + (xFactor - 1) * BOX_SIZE}
      y={GRID_OFFSET + (yFactor - 1) * BOX_SIZE}
      width={BOX_SIZE}
      height={BOX_SIZE}
      fill={
        isSelectedColor
          ? PRODUCT_SQUARE_FILL_COLOR_HOVER
          : PRODUCT_SQUARE_FILL_COLOR_HOVER
      }
    />
  );
}

export function XLegendNumbers({ highlightedNumber = 0 }) {
  return (
    <g>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <LegendNumbersText
          key={n}
          x={GRID_OFFSET + n * BOX_SIZE - BOX_SIZE / 2}
          y={GRID_OFFSET - 23}
          textAnchor="middle"
          dominantBaseline="central"
          isHighlighted={highlightedNumber === n}
        >
          {n}
        </LegendNumbersText>
      ))}
    </g>
  );
}

export function YLegendNumbers({ highlightedNumber = 0 }) {
  return (
    <g>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <LegendNumbersText
          key={n}
          x={GRID_OFFSET - 14}
          y={GRID_OFFSET + n * BOX_SIZE - BOX_SIZE / 2}
          textAnchor="end"
          dominantBaseline="central"
          isHighlighted={highlightedNumber === n}
        >
          {n}
        </LegendNumbersText>
      ))}
    </g>
  );
}

export const AnimatedCountNumbersSvgTexts = memo(
  ({ xFactor, yFactor, countNumberSvgTextRefs }) => {
    const product = xFactor * yFactor;
    const boxTextOffset = BOX_SIZE / 2;

    const countNumbers = useMemo(
      () => Array.from({ length: product }, (_, i) => i),
      [product]
    );

    const countNumberSvgTexts = countNumbers.map((i) => {
      const xCor = i % xFactor;
      const yCor = Math.floor(i / xFactor);

      return (
        <CountNumberSvgText
          key={i}
          ref={(countNumberSvgTextRef) =>
            (countNumberSvgTextRefs[i] = countNumberSvgTextRef)
          }
          x={GRID_OFFSET + xCor * BOX_SIZE + boxTextOffset}
          y={GRID_OFFSET + yCor * BOX_SIZE + boxTextOffset}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {i + 1}
        </CountNumberSvgText>
      );
    });

    return countNumberSvgTexts;
  }
);

const CountNumberSvgText = styled.text`
  font-size: 0px;
`;

const ChooseNewBoxSvgText = styled.text`
  font-size: 30px;
`;

const ResetButtonGroup = styled.g`
  &:hover {
    cursor: pointer;
  }
`;

export const ResetButton = ({ onClick }) => (
  <ResetButtonGroup onClick={onClick}>
    <rect
      x={GRID_OFFSET + BOX_SIZE * 10 + RESET_BUTTON_OFFSET_X}
      y={GRID_OFFSET + RESET_BUTTON_OFFSET_Y}
      width={200}
      height={50}
      rx={4}
      ry={4}
      fill={AREA_RECT_FILL_COLOR_HOVER}
      stroke={GRID_STROKE_COLOR}
    />
    <ChooseNewBoxSvgText
      x={GRID_OFFSET + BOX_SIZE * 10 + RESET_BUTTON_OFFSET_X + 20}
      y={GRID_OFFSET + RESET_BUTTON_OFFSET_Y + 35}
    >
      Velg ny rute
    </ChooseNewBoxSvgText>
  </ResetButtonGroup>
);
