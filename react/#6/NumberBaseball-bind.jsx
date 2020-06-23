import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {}

class NumberBaseball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      value: "",
      answer: getNumbers(),
      tries: []
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  onSubmitForm = e => {
    console.log(this.state.value);
  };

  onChangeInput(e) {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value
    });
  }

  number = ["1", "2", "3", "4"];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.number.map(v => {
            return <Try key={v} v={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
