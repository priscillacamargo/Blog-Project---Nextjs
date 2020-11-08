// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from "next-connect";
import posts from "../../data/data";

const handler = nc()
  .get((req, res) => {
    res.statusCode = 200;
    res.json({ data: posts });
  })
  .post((req, res) => {
    const post = { ...req.body, id: Date.now() };

    notes.push(post);

    res.statusCode = 200;
    res.json({ data: post });
  });

export default handler;
