import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      {/* This out will bring in NewPost */}
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
