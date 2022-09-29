import React from 'react';
import styles from './Buttons.module.scss';

const ButtonGroup = ({ sign }) => {
  return (
    <div className={styles.btn_group}>
      <button className="btn btn-dark mt-3" type="submit">
        {sign}
      </button>
      <button className="btn btn-danger mt-3 ml-3" type="reset">
        Reset
      </button>
    </div>
  );
};

export default ButtonGroup;
