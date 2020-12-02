import React from "react";
import "./ImageItem.css";

const ImageItem = React.memo(({ imageSrc, title }) => {
  return (
    <span className="image-span">
      <img className="Image" alt="" src={imageSrc} />

      <p className="image-title">{title}</p>
    </span>
  );
});

export default ImageItem;
