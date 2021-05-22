import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, toggle }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          previewImage={webformatURL}
          toggle={() => toggle(largeImageURL)}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
