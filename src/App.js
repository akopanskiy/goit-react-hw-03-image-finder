import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './component/SearchBar';
import ImageGallery from './component/ImageGallery';
import Button from './component/Button';
import Spin from './component/Loader';
import Modal from './component/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  fetchImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=20407857-5cbc70afd557f45317642044e&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          page: prevState.page + 1,
        }));
      })
      .then(() => {
        window.scrollBy({
          top: document.documentElement.clientHeight,
          behavior: 'smooth',
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };
  openBigImage = url => {
    this.setState({ modalImage: url });
    this.toggleModal();
  };
  render() {
    const { images, isLoading, showModal, modalImage } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />

        <ImageGallery items={images} toggle={this.openBigImage} />

        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {isLoading && <Spin />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
export default App;
