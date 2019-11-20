const getRandomNum = start => end => Math.round(Math.random() * end) % start;

export default field => ({
  x: getRandomNum(0)(field.width),
  y: getRandomNum(0)(field.height)
});
