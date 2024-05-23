import { useState } from "react";
import classes from "./NewPost.module.css";

// both onBodyChange, onAuthorChange are functions passed to be triggered on the onChange events
function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
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
