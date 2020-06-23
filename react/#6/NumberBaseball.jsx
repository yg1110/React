import React, { Component } from "react";

function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: "asd",
    value: "",
    answer: getNumbers(),
    tries: []
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

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
          {["1", "2", "3", "4"].map(v => {
            return <li>{v}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
