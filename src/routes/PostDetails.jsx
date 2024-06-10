import { useLoaderData, Link } from "react-router-dom";

import Model from "../components/Model";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Model>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Model>
    );
  }
  return (
    <Model>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Model>
  );
}

export default PostDetails;

export async function loader({ params }) {
  console.log({ params });
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}
