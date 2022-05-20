import React from "react";

class Link extends React.Component {
  render(){
    return (
      <a
      className="nav-link fw-bold py-1 px-2 text-white"
      aria-current="page"
      href={this.props.url}
    >
      {this.props.text}
    </a>
    )
  }
}

export default Link;