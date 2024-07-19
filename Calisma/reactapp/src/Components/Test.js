import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    
}

  render() {
    console.log("Render");

    this.componentDidCatch()
    {
        console.log("componentDidMount");
        //Api İstekleri
        this.setState({
            a:20
        })
    }
    return (
    <div>

    </div>
    );
  }
}

export default Test;
