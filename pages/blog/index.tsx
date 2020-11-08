/** @jsxRuntime classic */
/** @jsx jsx */
import Layout from "../../components/Layout";
import Link from "next/link";
import { NextPage } from "next/types";
import { jsx } from "theme-ui";
import { LanguageSwitch } from "../../components/LanguageSwitch";
import { FormattedMessage } from "react-intl";

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/`);
  const { data } = await res.json();
  return {
    props: { posts: data },
  };
}

type BlogProps = {
  posts: any;
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <div>
      <Layout>
        <h1 className="text-5xl font-bold text-purple-500">
          <FormattedMessage id="siteData.title" />
        </h1>
        <LanguageSwitch />

        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {posts.map((post) => (
            <div key={post.id} sx={{ width: "33%", p: 2 }}>
              <Link key={post.id} href="/blog/[post]" as={`/blog/${post.id}`}>
                <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                  <div sx={{ variant: "containers.card" }}>
                    <strong>{post.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
