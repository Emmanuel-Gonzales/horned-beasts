// CLASS COMPONENT

// IMPORTS
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from "./SelectedBeast";
import Form from 'react-bootstrap/Form';
import data from "./data/data.json"



// CLASS
class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    showModal: false,
    selectedBeast: '',
    selectedImg: '',
    selectedDesc: '',
    sortedData: data,
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

handleSelect = (event) => {
  event.preventDefault();
  let selected = event.target.value;
}

  render(){
    return (
      <> 
      <Header />
      <Form.Group>
        <Form.Label>Select Format</Form.Label>
        <Form.Select  name="selected" onChange={this.handleSelect}>
          <option value="">Choose</option>
          <option value="Standard">Standard</option>
          <option value="# of Horns">Number of Horns</option>
        </Form.Select>
      </Form.Group>
      <Main sortedData={this.state.sortedData} handleOpenModal={this.handleOpenModal} />
      <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} selectedDesc={this.state.selectedDesc} selectedImg={this.state.selectedImg}/>
      <Footer />
      </>
      )
  }
}


// EXPORT
export default App;