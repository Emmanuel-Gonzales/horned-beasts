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

  handleNameClick = () => {
this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
  }

  render(){
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Title>Animal: {this.props.title}</Card.Title>
        <Card.Text onClick={this.handleClick}>Favorites ❤️: {this.state.favorites}</Card.Text>
        <Card.Text># of Horns: {this.props.horns}</Card.Text>
        <img onClick={this.handleNameClick} src={this.props.image_url} alt={this.props.keyword} title={this.props.title}></img>
        <Card.Text>{this.props.description}</Card.Text>
      </Card>
    )
  }
}

export default Beast