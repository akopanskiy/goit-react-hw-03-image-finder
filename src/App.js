import React, { Component } from 'react';

import SearchBar from './component/SearchBar';
import ImageGallery from './component/ImageGallery';
import Button from './component/Button';
import Spin from './component/Loader';
import Modal from './component/Modal';
import imageApi from './services/imageApi';

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

    const options = {
      searchQuery,
      page,
    };

    imageApi
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
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
          <Modal onClose={this.toggleModal} bigImage={modalImage} />
        )}
      </>
    );
  }
}
export default App;
