import React from "react";
import Beast from "./Beast";

class Main extends React.Component {
  render(){
    return (
      <>
      <h2>Beasts</h2>
      <Beast title="Goat" img_url="public/Baby-Goat.jpg" alt="Cute Baby Goat" description="Enjoy This Chill Goat Relaxing"/>
      <Beast title="Ram" img_url="public/Ram.jpg" alt="Stoic Ram" description="Enjoy This Picture of a Powerful Ram" />
      </>
    )
  }
}

export default Main