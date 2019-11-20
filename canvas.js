const SIZE = 20;

const canvas = document.getElementById('canvas');

const clear = canvas => {
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawCell = (canvas, cell, size) => {
  const ctx = canvas.getContext('2d');

  const x = cell.x * size;
  const y = cell.y * size;

  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = 'red';
  ctx.fill();
};

export const draw = (snake, apple) => {
  clear(canvas);

  snake.map(cell => drawCell(canvas, cell, SIZE));
  drawCell(canvas, apple, SIZE);
};

export default {
  width: canvas.width / SIZE,
  height: canvas.height / SIZE
};
