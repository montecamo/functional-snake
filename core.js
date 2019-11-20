import {
  move,
  processBorders,
  getSpeed,
  isBiten,
  wannaEat,
  eat
} from './snake';

import spawnApple from './apple';
import field, { draw } from './canvas';

import getVector from './vector';

const tick = (snake, apple, vector, field) => {
  const newSnake = processBorders(move(snake, vector), field);

  if (wannaEat(newSnake, apple)) {
    return [eat(snake, vector), spawnApple(field)];
  }

  return [newSnake, apple];
};

const loop = ({ snake, apple, tick, field }) => {
  const vector = getVector();

  const [newSnake, newApple] = tick(snake, apple, vector, field);

  draw(newSnake, newApple);

  if (isBiten(newSnake)) return;

  setTimeout(() => {
    loop({ snake: newSnake, apple: newApple, tick, field });
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
  field,
  apple: spawnApple(field)
});
