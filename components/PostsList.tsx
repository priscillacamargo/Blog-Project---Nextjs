/** @jsxRuntime classic */
/** @jsx jsx */

import Link from "next/link";
import { jsx } from "theme-ui";
import { Heading } from "theme-ui";
import { Grid } from "theme-ui";
import { Image } from "theme-ui";
import { Card } from "theme-ui";

type BlogProps = {
  posts: any;
};

export const PostsList: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Grid gap={2} columns={[2, "2fr 2fr"]}>
      {posts.map((post) => (
        <Link key={post.id} href="/blog/[post]" as={`/blog/${post.id}`}>
          <a sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Card
              key={post.id}
              sx={{
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
              }}
            >
              <Image />
              <Heading
                as="h3"
                sx={{
                  m: 0,
                }}
              >
                <div sx={{ variant: "containers.card" }}>
                  <strong>{post.title}</strong>
                </div>
              </Heading>
              <p
                sx={{
                  m: 0,
                }}
              >
                {post.content}
              </p>
            </Card>
          </a>
        </Link>
      ))}
    </Grid>
  );
};
