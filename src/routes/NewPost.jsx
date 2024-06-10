import classes from "./NewPost.module.css";
import Model from "../components/Model";
import { Link, Form, redirect } from "react-router-dom";

// So thing to note. For react-router, you have a knew component "Form"
// This gives you the ability to change your form below to be a react-router component
// and there for now it automatically keeps the form from submitting.
// Because remember that you dont have a server side to work on this FE app.
// You need to make the fetch out to send to outter backend app.

function NewPost() {
  return (
    <Model>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          {/* here I used "/" just to keep it simple */}
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export default NewPost;
// This function is what is being ignited in main.jsx with the action
// data being passed to function below is passed automatically by react-router.
// This is not data of form its an object has a request property with
//that request object that is built by react routn
export async function action(data) {
  // this console log shows you it all
  //console.log("data object offered by action of react router", data);

  //formData yields a promise
  const formData = await data.request.formData();
  console.log("author", formData.get("author"));
  console.log("body", formData.get("body"));

  // this will create a key value object {body: '...', author: '...'}
  // this line creates the object you need to pass it to the fetch.
  // If not you would need to ake those get()s and make the object.
  const postData = Object.fromEntries(formData);
  console.log("this is what will be sent back", postData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // after all the data gets sent in the fetch above, this just redirect us
  return redirect("/");
}
