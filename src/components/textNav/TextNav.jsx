import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TextNav.module.scss';

function TextNav({ text, path, sign }) {
  return (
    <div className={styles.sign}>
      <span>
        {`${text} `}
        <NavLink to={path}>{sign}</NavLink>
      </span>
    </div>
  );
}

export default TextNav;
