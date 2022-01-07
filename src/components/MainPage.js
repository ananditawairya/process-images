import React, { useState } from "react";
import ImageList from "./ImageList";
import ImageInformation from "./ImageInformation";
import "./MainPage.css";
function MainPage() {
  const [imageData, setImageData] = useState();
  const handleImageClick = (image) => {
    setImageData(image);
    console.log("image", image);
  };
  return (
    <div className="main">
      <ImageList imageData={handleImageClick} />
      <ImageInformation imageData={imageData} />
    </div>
  );
}

export default MainPage;
