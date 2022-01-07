import React, { useEffect, useState, useRef } from "react";
import "./ImageInfo.css";
function ImageInformation(props) {
  const imgRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    if (props.imageData) {
      setHeight(imgRef.current.clientHeight);
      setWidth(imgRef.current.clientWidth);
    }
  }, [props.imageData]);

  const onImageLoad = ({ target: img }) => {
    setDimensions({ height: img.naturalHeight, width: img.naturalWidth });
  };

  return (
    <div className="image-info">
      <h2 className="image-details-headings">Image Details</h2>
      <div>
        {props.imageData ? (
          <div className="image-container">
            <img
              src={props.imageData.imgSrc}
              alt="test"
              className="image-preview"
              ref={imgRef}
              onLoad={onImageLoad}
            />
            <p className="image-size">Size of Image:{props.imageData.size}</p>
            <p className="original-dimension">
              Original Image Dimentions:
              {`${dimensions.width} x ${dimensions.height}`}
            </p>
            <p className="current-dimension">
              Current Image Dimentions:{`${width} x ${height}`}
            </p>
          </div>
        ) : (
          "No Information to display! Select image to process"
        )}
      </div>
    </div>
  );
}

export default ImageInformation;
