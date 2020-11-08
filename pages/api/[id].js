import nc from "next-connect";
import posts from "../../data/data";

const getPost = (id) => posts.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const post = getPost(req.query.id);

    if (!post) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: post });
  })
  .patch((req, res) => {
    const post = getPost(req.query.id);

    if (!post) {
      res.status(404);
      res.end();
      return;
    }

    const i = posts.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...post, ...req.body };

    posts[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const post = getPost(req.query.id);

    if (!post) {
      res.status(404);
      res.end();
      return;
    }
    const i = posts.findIndex((n) => n.id === parseInt(req.query.id));

    posts.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
