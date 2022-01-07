import React, { useEffect } from "react";
import "./ImageList.css";
import { useSelector } from "react-redux";
function ImageList(props) {
  const imageInfo = useSelector((state) => state.imageInfo);
  useEffect(() => {
    console.log(imageInfo);
  }, [imageInfo]);

  const handleImageClick = (image) => {
    props.imageData(image);
  };

  return (
    <div className="image-list">
      <h2 className="list-heading">Image Listing</h2>
      <div>
        {imageInfo.length > 0
          ? imageInfo.map((image) => (
              <p
                key={image.id}
                onClick={() => handleImageClick(image)}
                className="image-item"
              >
                {image.name}
              </p>
            ))
          : "No Images Listed! Select images to proceed"}
      </div>
    </div>
  );
}

export default ImageList;
