import React from "react";
import "./Beast.css"
import Card from 'react-bootstrap/Card';


class Beast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0
    }
  }

  handleClick = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  } 

  render(){
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Title>Animal: {this.props.title}</Card.Title>
        <Card.Text>Favorites ❤️: {this.state.favorites}</Card.Text>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} onClick={this.handleClick} ></img>
        <Card.Text>{this.props.description}</Card.Text>
      </Card>
    )
  }
}

export default Beast