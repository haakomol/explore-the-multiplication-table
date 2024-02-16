import React from 'react';

import { BOX_SIZE, GRID_OFFSET } from '../constants';
import { LegendNumbersText } from './common-svg-components';

export const XFactorLengthMeasurement = ({ xFactor }) => (
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

export const YFactorLengthMeasurement = ({ yFactor }) => (
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
