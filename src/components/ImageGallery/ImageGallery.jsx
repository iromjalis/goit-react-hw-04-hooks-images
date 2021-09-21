import React from "react";
//components
import ImageGalleryItem from "./ImageGalleryItem";

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
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};
export default ImageGallery;
