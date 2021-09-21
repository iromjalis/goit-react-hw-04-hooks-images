/* eslint-disable react/no-unused-state */
import "./App.css";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import imagesApi from "./services/images-api";

import Container from "./components/Container/Container";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from "components/Loader/Loader";

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

//* const API = '21072245-3acfda09a1d5bc65070e6b336';
//! https://pixabay.com/api/?key=21072245-3acfda09a1d5bc65070e6b336&q=yellow+flowers&image_type=photo

// function App() {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [largeImageURL, setLargeImageURL] = useState("");
//   const [filter, setFilter] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     if (searchQuery) {
//       fetchImages();
//     }
//   }, []);

//   useEffect(
//     (error) => {
//       setError(error);
//     },
//     [error]
//   );

//   const onChangeQuery = (query) => {
//     setSearchQuery(query);
//     setCurrentPage(1);
//     setImages([]);
//   };
//   const fetchImages = () => {
//     setIsLoading(true);

//     const options = {
//       searchQuery,
//       currentPage,
//     };

//     imagesApi
//       .fetchImages(options)
//       .then((data) => {
//         setImages([...images, ...data]);
//         setCurrentPage((prevPage) => prevPage + 1);
//         setError("");
//       })
//       .catch((error) => console.log(error))
//       .finally(() => {
//         setIsLoading(false);
//         window.scrollTo(
//           {
//             top: document.querySelector("#imagesList").scrollHeight,
//             behavior: "smooth",
//           },
//           800
//         );
//       });
//   };
//   const toggleModal = () => setShowModal(!showModal);

//   const handleLargeURLImage = (data) => {
//     setLargeImageURL(data);
//     setShowModal(true);
//   };

//   return (
//     <div className="App">
//       <Container>
//         {showModal && (
//           <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
//         )}
//         <Searchbar onSubmit={onChangeQuery} searchQuery={searchQuery} />
//         {images.length > 0 && (
//           <ImageGallery
//             images={images}
//             handleLargeURLImage={handleLargeURLImage}
//           />
//         )}
//         {isLoading ? (
//           <Loader error={error} />
//         ) : (
//           images.length > 0 && <Button onClick={fetchImages} />
//         )}
//       </Container>
//     </div>
//   );
// }

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    largeImageURL: "",
    filter: "",
    isLoading: false,
    error: null,
    showModal: false,
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    const options = {
      searchQuery,
      currentPage,
    };
    imagesApi
      .fetchImages(options)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
          error: "",
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector("#imagesList").scrollHeight,
          behavior: "smooth",
        });
      });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  handleLargeURLImage = (data) => {
    this.setState({ largeImageURL: data });
    this.setState({ showModal: true });
  };

  render() {
    const { images, showModal, largeImageURL, isLoading, error } = this.state;
    return (
      <div className="App">
        <Container>
          {showModal && (
            <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
          )}
          <Searchbar
            onSubmit={this.onChangeQuery}
            searchQuery={this.searchQuery}
          />
          {images.length > 0 && (
            <ImageGallery
              images={images}
              handleLargeURLImage={this.handleLargeURLImage}
            />
          )}
          {isLoading ? (
            <Loader error={error} />
          ) : (
            images.length > 0 && <Button onClick={this.fetchImages} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
