// CLASS COMPONENT

// IMPORTS
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


// CLASS
class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    showModal: false,
    selectedBeast: '',
    selectedImg: '',
    selectedDesc: ''
  }
}

handleCloseModal = () =>{
  this.setState({
    showModal: false
  })
}

handleOpenModal = (name, img, desc) =>{
  this.setState({
    showModal: true,
    selectedBeast: name,
    selectedImg: img,
    selectedDesc: desc
  })
}

  render(){
    return (
      <> 
      <Header />
      <Main handleOpenModal={this.handleOpenModal} />
      <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
      <Modal.Header closeButton>{this.state.selectedBeast}</Modal.Header>
      <Modal.Body>
        <img src={this.state.selectedImg} alt={this.state.selectedBeast} width="450"></img>
        <p>{this.state.selectedDesc}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleCloseModal}>Close</Button>
      </Modal.Footer>
      </Modal>
      <Footer />
      </>
      )
  }
}


// EXPORT
export default App;