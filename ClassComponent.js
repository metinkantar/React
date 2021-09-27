import React from "react";

class ClassComponent extends React.Component {
  // yeni yöntem Costructor 
  // state = {}
  
  // eski yöntem Costructor 
  constructor(props) {
    super(props);
    this.state = {
      arttir: 0
    };
  }
  
  sayiArttir = () => {
    this.setState({
      arttir: this.state.arttir + 1
    });
  };

  sayiAzalt = () => {
    this.setState({
      arttir: this.state.arttir - 1
    });
  };

  render() {
    return (
      <di>
        <h1>Class Component</h1>
        <h3>(Sınıf Bileşeni)</h3>
        <p>Counter : {this.state.arttir}</p>
        <button onClick={() => this.sayiArttir()}>Arttır</button>
        <button onClick={() => this.sayiAzalt()}>Azalt</button>
      </di>
    );
  }
}

export default ClassComponent;
