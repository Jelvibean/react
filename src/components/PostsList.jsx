import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Model from "./Model";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // Nice example of a POST request. Fetch sends data back.
    // By default a fetch is set to a GET request. So add method to it.
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // look into what spread operator does.
    //This is not good because if update state and new state is based on previsou state value.
    // you should actually pass a function to set post .  This function will be call automacticall by react when every you call setPost and this
    //function will acutomatically receive current state and you will return a new state.

    // setPosts([setPosts, ...posts]);

    // Just remember if new state depends on old state.. use a function to update
    // state and you get the old state automatically and you can return the new value.
    setPosts((existingPosts) => [postData, ...existingPosts]);

    //consoling posts you can clearly see that every time you submit, the first time,
    //posts is empty but after that every item entered has the previous post added.
    // this is because of the spread operator.
    // also you want to item that is submitted, its in postData.
    //Not sure what existing post is. ***
    console.log("I am posts", posts);
    console.log("I am postData", postData);
  }

  return (
    // isPosting is the flag sent over to see if youshow modal or not.
    <>
      {isPosting ? (
        // onStopPosting sends the functoin to hide the modal.
        <Model onBodyClick={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Model>
      ) : null}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Please start adding some.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
