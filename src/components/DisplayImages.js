import React, { createRef } from "react";
import ImgCard from "./ImgCard";

class DisplayImages extends React.Component {
  DisplayImages = () => {
    const imgTag = this.props.images.map((img) => {
      return <ImgCard key={img.id} img={img} />;
    });
    return imgTag;
  };

  render() {
    return <div className="image-grid">{this.DisplayImages()}</div>;
  }
}
export default DisplayImages;
