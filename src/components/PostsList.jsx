import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Model from "./Model";

function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("Welcome");
  const [enteredAuthor, setEnteredAuthor] = useState("Who are you?");

  // these guys set the state for both pieces when they are triggered from the NewPost Child
  function BodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalState;

  return (
    // isPosting is the flag sent over to see if youshow modal or not.
    <>
      {isPosting ? (
        // onStopPosting sends the functoin to hide the modal.
        <Model onBodyClick={onStopPosting}>
          <NewPost
            onBodyChange={BodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Model>
      ) : null}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;
