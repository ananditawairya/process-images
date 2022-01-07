import React from "react";
import { useDispatch } from "react-redux";
import { uploadAction } from "../store/actions";
import { v4 as uuid } from "uuid";
import "./Navbar.css";
const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = (file) => {
    if (!file) {
      console.log("File not present");
      return;
    }
    console.log(file.name, file.size);

    fileToDataUri(file).then((dataUri) => {
      dispatch(
        uploadAction({
          name: file.name,
          size: file.size,
          id: uuid(),
          imgSrc: dataUri,
        })
      );
    });
  };

  return (
    <div className="navbar">
      <div className="title-container">
        <h2 className="title">Image Processor</h2>
      </div>
      <input
        className="browse"
        type="file"
        name="browse-images"
        accept="image/png,image/jpg"
        onChange={(event) => handleClick(event.target.files[0] || null)}
      />
    </div>
  );
};
export default Navbar;
