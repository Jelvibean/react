import { useState } from "react";
import classes from "./NewPost.module.css";

// both onBodyChange, onAuthorChange are functions passed to be triggered on the onChange events
function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("Welcome");
  const [enteredAuthor, setEnteredAuthor] = useState("Who are you?");

  // these guys set the state for both pieces when they are triggered from the NewPost Child
  function BodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function onSubmitHandler(event) {
    //this prevents browser default to send an http request.
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);
    //console.log(postData);
    onCancel();
  }

  return (
    // onsubmit handler.
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={BodyChangeHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          autoComplete="off"
          onChange={authorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        {/* by default a button in a form will submt.. so add type=button so this button doesnt  */}
        {/* Leave button for submit alone since again by default it will submit.  */}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
