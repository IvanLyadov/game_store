import React, { Component } from 'react';
import Main from './views/Main.js';
import Api from './Api.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: Api
    })
 }

  render() {
    return (
      <div>
        <Main data={this.state}/>
      </div>
    );
  }
}

export default App;
