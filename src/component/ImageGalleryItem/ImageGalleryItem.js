import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, previewImage, toggle }) => {
  return (
    <li key={id} className={styles.ImageGalleryItem} onClick={toggle}>
      <img src={previewImage} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
