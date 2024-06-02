import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

//So the <link> component here is used in place of the <a> because this is what
//prevents the app when you click to do a whole re-render.
//With <a> you leave the single page app just to load it again.
//With that we would loose our global states plus we
//are reloading the whole application which is not the best expienece.

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        {/* instead of using href in a react-router-dom link, you use 'to' */}
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
