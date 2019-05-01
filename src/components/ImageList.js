import "./ImageList.css";
import React from "react";

//Lec. 98 Key in Lists.

const ImageList = props => {
  const images = props.images.map(({ desc, id, urls }) => {
    return <img alt={desc} key={id} src={urls.regular} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
