import { useNavigate } from "react-router-dom";
import classes from "./Model.module.css";
function Model({ children }) {
  //this constant navigate now holds a function.
  const navigate = useNavigate();
  function closeHandler() {
    // two dots here are just like going up directories in terminal.
    // save as if you would do "/"
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Model;
