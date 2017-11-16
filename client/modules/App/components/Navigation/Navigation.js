import React, { Proptype } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

export function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Link to={"/home"}>HOME</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/posts"}>POSTS</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
