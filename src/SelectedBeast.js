import React from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>{this.props.selectedBeast}</Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedImg} alt={this.props.selectedBeast} width="450"></img>
            <p>{this.props.selectedDesc}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}

export default SelectedBeast