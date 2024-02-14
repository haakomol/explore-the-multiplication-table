import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';

import {
  GRID_OFFSET,
  BOX_SIZE,
  GRID_STROKE_WIDTH,
  GRID_STROKE_COLOR,
  FORMULA_OFFSET_Y,
  FORMULA_OFFSET_X,
  AREA_RECT_FILL_COLOR_HOVER,
  AREA_RECT_STROKE_COLOR_HOVER,
  AREA_RECT_STROKE_WIDTH,
  AREA_RECT_FILL_COLOR_SELECTED,
  AREA_RECT_STROKE_COLOR_SELECTED,
  PRODUCT_BOX_FILL_COLOR_HOVER,
  HIGHLIGHTED_LEGEND_NUMBER_COLOR,
} from '../constants';
import { TweenMax, Back, Sine } from 'gsap';

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

export const HoverFillRectUnderlay = ({
  xFactor,
  yFactor,
  isSelected,
  highlightProductBox = true,
}) => (
  <>
    <rect
      x={GRID_OFFSET}
      y={GRID_OFFSET}
      width={xFactor * BOX_SIZE}
      height={yFactor * BOX_SIZE}
      fill={
        isSelected ? AREA_RECT_FILL_COLOR_SELECTED : AREA_RECT_FILL_COLOR_HOVER
      }
    />
    {highlightProductBox && (
      <rect
        x={GRID_OFFSET + (xFactor - 1) * BOX_SIZE}
        y={GRID_OFFSET + (yFactor - 1) * BOX_SIZE}
        width={BOX_SIZE}
        height={BOX_SIZE}
        fill={
          isSelected
            ? PRODUCT_BOX_FILL_COLOR_HOVER
            : PRODUCT_BOX_FILL_COLOR_HOVER
        }
      />
    )}
  </>
);

const LegendNumbersText = styled.text`
  font-size: 20px;
  fill: ${(props) =>
    props.isHighlighted ? HIGHLIGHTED_LEGEND_NUMBER_COLOR : 'inherit'};
`;

export const HoverStrokeRectOverlay = ({ xFactor, yFactor, isSelected }) => (
  <rect
    x={GRID_OFFSET}
    y={GRID_OFFSET}
    width={xFactor * BOX_SIZE}
    height={yFactor * BOX_SIZE}
    fill="none"
    stroke={
      isSelected
        ? AREA_RECT_STROKE_COLOR_SELECTED
        : AREA_RECT_STROKE_COLOR_HOVER
    }
    strokeWidth={AREA_RECT_STROKE_WIDTH}
    rx={2}
    ry={2}
  />
);

export const XLegendNumbers = ({ highlightedNumber = 0 }) => (
  <g>
    {Array.from({ length: 10 }, (v, i) => i + 1).map((n) => (
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

export const YLegendNumbers = ({ highlightedNumber = 0 }) => (
  <g>
    {Array.from({ length: 10 }, (v, i) => i + 1).map((n) => (
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

export const XFactorMeasurement = ({ xFactor }) => (
  <g stroke="#000">
    <line
      x1={GRID_OFFSET}
      x2={GRID_OFFSET + BOX_SIZE * xFactor}
      y1={GRID_OFFSET - 15}
      y2={GRID_OFFSET - 15}
    />
    <line
      x1={GRID_OFFSET}
      x2={GRID_OFFSET}
      y1={GRID_OFFSET - 25}
      y2={GRID_OFFSET - 5}
    />
    <line
      x1={GRID_OFFSET + BOX_SIZE * xFactor}
      x2={GRID_OFFSET + BOX_SIZE * xFactor}
      y1={GRID_OFFSET - 25}
      y2={GRID_OFFSET - 5}
    />
    <LegendNumbersText
      textAnchor="middle"
      x={GRID_OFFSET + (BOX_SIZE * xFactor) / 2}
      y={GRID_OFFSET - 23}
    >
      {xFactor}
    </LegendNumbersText>
  </g>
);

export const YFactorMeasurement = ({ yFactor }) => (
  <g stroke="#000">
    <line
      x1={GRID_OFFSET - 15}
      x2={GRID_OFFSET - 15}
      y1={GRID_OFFSET}
      y2={GRID_OFFSET + BOX_SIZE * yFactor}
    />
    <line
      x1={GRID_OFFSET - 25}
      x2={GRID_OFFSET - 5}
      y1={GRID_OFFSET}
      y2={GRID_OFFSET}
    />
    <line
      x1={GRID_OFFSET - 25}
      x2={GRID_OFFSET - 5}
      y1={GRID_OFFSET + BOX_SIZE * yFactor}
      y2={GRID_OFFSET + BOX_SIZE * yFactor}
    />
    <LegendNumbersText
      textAnchor="end"
      dominantBaseline="middle"
      x={GRID_OFFSET - 23}
      y={GRID_OFFSET + 2 + (BOX_SIZE * yFactor) / 2}
    >
      {yFactor}
    </LegendNumbersText>
  </g>
);

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

const CountNumberText = styled.text`
  font-size: 0px;
  /* fill: ${(props) => (props.lastOne ? 'inherit' : 'inherit')}; */
`;

export const AnimatedCountNumbers = ({ xFactor, yFactor, onComplete }) => {
  const product = xFactor * yFactor;
  const boxTextOffset = BOX_SIZE / 2;

  const numbersArray = useMemo(
    () => Array.from({ length: product }, (v, i) => i),
    [product]
  );
  const animatedNumbersRefs = [];

  useEffect(() => {
    const animationDuration = 1 + product * 0.035;
    // const staggerDelay = animationDuration / product;
    TweenMax.staggerTo(
      animatedNumbersRefs,
      0.4,
      {
        fontSize: '20px',
        ease: Back.easeOut.config(4.5),
        stagger: { ease: Sine.easeOut, amount: animationDuration },
      },
      null,
      onComplete
    );
  });

  const animatedNumbers = numbersArray.map((i) => {
    const xCor = i % xFactor;
    const yCor = Math.floor(i / xFactor);
    return (
      <CountNumberText
        key={i}
        ref={(countNumberText) => (animatedNumbersRefs[i] = countNumberText)}
        x={GRID_OFFSET + xCor * BOX_SIZE + boxTextOffset}
        y={GRID_OFFSET + yCor * BOX_SIZE + boxTextOffset}
        textAnchor="middle"
        dominantBaseline="central"
        lastOne={i + 1 === product}
      >
        {i + 1}
      </CountNumberText>
    );
  });

  return animatedNumbers;
};

const ChooseNewBoxText = styled.text`
  font-size: 30px;
`;

const RESET_BUTTON_OFFSET_X = 50;
const RESET_BUTTON_OFFSET_Y = 60;

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
    <ChooseNewBoxText
      x={GRID_OFFSET + BOX_SIZE * 10 + RESET_BUTTON_OFFSET_X + 20}
      y={GRID_OFFSET + RESET_BUTTON_OFFSET_Y + 35}
    >
      Velg ny rute
    </ChooseNewBoxText>
  </ResetButtonGroup>
);
