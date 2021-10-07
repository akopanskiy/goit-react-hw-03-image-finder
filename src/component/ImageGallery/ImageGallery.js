import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, toggle }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          previewImage={webformatURL}
          toggle={() => toggle(largeImageURL)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,

  toggle: PropTypes.func.isRequired,
};

export default ImageGallery;
