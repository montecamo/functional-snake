import { ARROW_CODE, VECTOR } from './constants';

let vector = VECTOR.RIGHT;

const listenVectorChange = cb => {
  window.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case ARROW_CODE.LEFT:
        return cb(VECTOR.LEFT);
      case ARROW_CODE.UP:
        return cb(VECTOR.UP);
      case ARROW_CODE.RIGHT:
        return cb(VECTOR.RIGHT);
      case ARROW_CODE.DOWN:
        return cb(VECTOR.DOWN);
    }
  });

  return () => window.removeEventListener('keydown', cb);
};

listenVectorChange(v => {
  vector = v;
});

export default () => vector;
