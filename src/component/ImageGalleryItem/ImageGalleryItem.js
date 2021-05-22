import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ previewImage, toggle }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={toggle}>
      <img src={previewImage} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};
export default ImageGalleryItem;
