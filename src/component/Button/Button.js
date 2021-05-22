import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} type="submit" onClick={() => onClick()}>
      Load More
    </button>
  );
};
export default Button;
