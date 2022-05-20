import React from "react";

class linkButton extends React.Component {
  render() {
    return (
      <>
      <button className="btn btn-lg btn-primary">
        {this.props.text}
      </button>
      </>
    );
  }
}

export default linkButton;
