import React from "react";
import Beast from "./Beast";
import data from "./data/data.json"
// import Header from "./Header";
import "./Main.css"

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((beast, index) => (
          <Beast
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.keyword} key={index}
            handleOpenModal={this.props.handleOpenModal} />
        ))}
      </main>
    )
  }
}

export default Main