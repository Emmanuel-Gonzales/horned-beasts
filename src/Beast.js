import React from "react";


class Beast extends React.Component {
  render(){
    return (
      <article>
        <h2>Animal: {this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.props.alt} title={this.props.title}></img>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default Beast