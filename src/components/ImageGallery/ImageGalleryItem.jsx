import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  handleLargeURLImage,
}) => {
  // const [largeImg, setLargeImg] = useState("");
  const handleClick = (e) => {
    if (e.target.nodeName === "IMG") {
      // setLargeImg(e.target.dataset.large);
      handleLargeURLImage(e.target.dataset.large);
    }
  };
  return (
    <li className="ImageGalleryItem" key={webformatURL} onClick={handleClick}>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={handleClick}
        data-large={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  handleLargeURLImage: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  id: "",
  webformatURL: "",
  largeImageURL: "",
  tags: "",
  handleLargeURLImage: "",
};

export default ImageGalleryItem;
