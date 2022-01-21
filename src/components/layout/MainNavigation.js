import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Movies App</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Movies</Link>
          </li>
          <li>
            <Link to='/new-movie'>Add New Movie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
