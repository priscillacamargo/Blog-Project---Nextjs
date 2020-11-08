const posts = new Array(15).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Post ${i}`,
}));

module.exports = posts;
