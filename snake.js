import uniqWith from 'lodash/uniqWith';
import intersectionWith from 'lodash/intersectionWith';

import isEqual from 'lodash/isEqual';

import { VECTOR } from './constants';

const getNextPosition = (cell, vector) => {
  switch (vector) {
    case VECTOR.UP:
      return { ...cell, y: cell.y - 1 };
    case VECTOR.DOWN:
      return { ...cell, y: cell.y + 1 };
    case VECTOR.RIGHT:
      return { ...cell, x: cell.x + 1 };
    case VECTOR.LEFT:
      return { ...cell, x: cell.x - 1 };
  }
};

const getHead = snake => snake.slice(-1)[0];

const cutTail = snake => snake.slice(1);

export const move = (snake, vector) => [
  ...cutTail(snake),
  getNextPosition(getHead(snake), vector)
];

export const getSpeed = snake => 100;

const processIntercection = (coordinate, border) =>
  (border + (coordinate % border)) % border;

export const processBorders = (snake, field) =>
  snake.map(cell => ({
    x: processIntercection(cell.x, field.width),
    y: processIntercection(cell.y, field.height)
  }));

const hasDuplicate = arr =>
  filter(arr, (val, i, iteratee) => includes(iteratee, val, i + 1));

export const eat = (snake, vector) => [
  ...snake,
  getNextPosition(getHead(snake), vector)
];

export const wannaEat = (snake, apple) =>
  intersectionWith(snake, [apple], isEqual).length;

export const isBiten = snake =>
  uniqWith(snake, isEqual).length !== snake.length;
