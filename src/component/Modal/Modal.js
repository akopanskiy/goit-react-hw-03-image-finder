import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  // handleBackDropClick = e => {
  //   if (e.currentTarget === e.target) {
  //     this.props.onClose();
  //   }
  // };

  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.bigImage} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  bigImage: PropTypes.string.isRequired,
};

export default Modal;
