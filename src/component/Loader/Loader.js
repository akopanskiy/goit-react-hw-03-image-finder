import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const Spin = () => {
  return (
    <div className={styles.spin}>
      <Loader
        type="Hearts"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={30000}
      />
    </div>
  );
};
export default Spin;
