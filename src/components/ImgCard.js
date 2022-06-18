import React from "react";
import "./DisplayImage.css";

//

class ImgCard extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { span: 0 };
  }
  componentDidMount() {
    this.myRef.current.addEventListener("load", (e) => {
      this.setState({ span: Math.ceil(this.myRef.current.clientHeight / 10) });
    });
  }

  createCard = () => {
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.span}`,
        }}
      >
        <img
          ref={this.myRef}
          src={this.props.img.urls.regular}
          alt={this.props.img.description}
        />
      </div>
    );
  };

  render() {
    return this.createCard();
  }
}

export default ImgCard;
