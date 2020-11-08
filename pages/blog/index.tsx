/** @jsxRuntime classic */
/** @jsx jsx */
import Header from "../../components/Header";
import { NextPage } from "next/types";
import { jsx } from "theme-ui";
import { LanguageSwitch } from "../../components/LanguageSwitch";
import { FormattedMessage } from "react-intl";
import { Heading } from "theme-ui";
import { PostsList } from "../../components/PostsList";

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
      <Header>
        <Heading
          sx={{
            alignSelf: "center",
            marginTop: 30,
          }}
          as="h1"
        >
          <FormattedMessage id="siteData.title" />
        </Heading>
        <Heading
          sx={{
            alignSelf: "center",
            marginTop: 30,
          }}
          as="h3"
        >
          <FormattedMessage id="siteData.description" />
        </Heading>
        <LanguageSwitch />
      </Header>

      <PostsList posts={posts} />
    </div>
  );
};

export default Blog;
