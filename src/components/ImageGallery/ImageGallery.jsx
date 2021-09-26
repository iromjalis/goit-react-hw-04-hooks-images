import React from "react";
//components
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, handleLargeURLImage }) => {
  const handleClick = (e) => {
    console.log("gallery click");
  };
  const largeURLImage = (data) => {
    handleLargeURLImage(data);
  };
  return (
    <ul className="ImageGallery" id="imagesList">
      {images.map(({ id, webformatURL, largeImageURL, tags, user }) => (
        <ImageGalleryItem
          onClick={handleClick}
          key={`${id}${user}`}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tag={tags}
          handleLargeURLImage={largeURLImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
