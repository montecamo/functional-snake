import { move, processBorders, getSpeed, isBiten } from './snake';

import field, { draw } from './canvas';

import getVector from './vector';

const tick = (snake, vector, field) => {
  return processBorders(move(snake, vector), field);
};

const loop = ({ snake, tick, field }) => {
  const vector = getVector();

  const newSnake = tick(snake, vector, field);

  draw(newSnake, field);

  if (isBiten(newSnake)) return;

  setTimeout(() => {
    loop({ snake: newSnake, tick, field });
  }, getSpeed(newSnake));
};

loop({
  snake: [
    { x: 10, y: 10 },
    { x: 11, y: 10 },
    { x: 12, y: 10 },
    { x: 13, y: 10 },
    { x: 14, y: 10 },
    { x: 15, y: 10 },
    { x: 16, y: 10 },
    { x: 17, y: 10 },
    { x: 18, y: 10 }
  ],
  tick,
  field
});
