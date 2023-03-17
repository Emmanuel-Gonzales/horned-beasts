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

  if(selected === "# of Horns"){
    let hornedData = data.sort((a, b) => a.horns - b.horns);
    this.setState({
      sortedData: hornedData
    });
  } else if (selected === "1"){
    let oneHorn = data.filter(beast => beast.horns === 1)
    this.setState({
      sortedData: oneHorn
    });
  } else if (selected === "2"){
    let twoHorns = data.filter(beast => beast.horns === 2)
    this.setState({
      sortedData: twoHorns
    });
  } else if (selected === "3"){
    let threeHorns = data.filter(beast => beast.horns === 3)
    this.setState({
      sortedData: threeHorns
    });
  } else if (selected === "100"){
    let hundredHorn = data.filter(beast => beast.horns === 100)
    this.setState({
      sortedData: hundredHorn
    });
  }
}

  render(){
    return (
      <> 
      <Header />
      <Form.Group>
        <Form.Label>Select Format</Form.Label>
        <Form.Select  name="selected" onChange={this.handleSelect}>
          <option value="">Choose</option>
          <option value="# of Horns">Descending Number of Horns</option>
          <option value="1">1 Horn</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="100">100 Horns</option>
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