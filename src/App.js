// CLASS COMPONENT

// IMPORTS
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Beast from './Beast'
import Modal from 'react-bootstrap/Modal';


// CLASS
class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    showModal: false 
  }
}

handleCloseModal = () =>{
  this.setState({
    showModal: false
  })
}

handleOpenModal = () =>{
  this.setState({
    showModal: true
  })
}

  render(){
    return (
      <> 
      <Header />
      <Main handleOpenModal={this.description} />
      <Modal show={this.state.showModal} onHide={this.handleCloseModal} />
      <Footer />
      </>
      )
  }
}


// EXPORT
export default App;