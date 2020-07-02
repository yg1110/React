const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello World"
  };

  render() {
    return this.state.text;
  }
}

module.exports = WordRelay;
