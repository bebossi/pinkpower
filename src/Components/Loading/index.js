import React from "react";
import style from "./style.module.css";

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: (
        <img
          src={"https://www.inplafer.com.br/img/decorations/loading.gif"}
          alt="Loading"
        />
      ),
    };
  }

  handleImageLoaded() {
    this.setState({
      imageStatus: <img src={this.props.imageUrl} className={style.gif} />,
    });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "Error" });
  }

  render() {
    return (
      <div>
        <img
          src={this.props.imageUrl}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          className={style.gifHidden}
        />
        {this.state.imageStatus}
      </div>
    );
  }
}
export default ImageWithStatusText;
