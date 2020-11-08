/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/");
  const { data } = await res.json();

  console.log(data);
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/${params.id}`);
  console.log("res", res);
  const post = await res.json();

  return { props: { post } };
}

const Note = ({ post }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Post: {post.title} </h1>
    </div>
  );
};

export default Note;
