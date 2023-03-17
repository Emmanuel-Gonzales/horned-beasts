import React from "react";
import Beast from "./Beast";
import "./Main.css"

class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.sortedData.map((beast, index) => (
          <Beast
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.keyword} key={index}
            horns={beast.horns}
            handleOpenModal={this.props.handleOpenModal} />
        ))}
      </main>
    )
  }
}

export default Main