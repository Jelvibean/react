import classes from "./Model.module.css";
function Model({ children, onBodyClick }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onBodyClick} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Model;
