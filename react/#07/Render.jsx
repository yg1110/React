import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    count: 0
  };

  //   shouldComponentUpdate(nextProps, nextState, nextContent) {
  //     if (this.state.count !== nextState.count) {
  //       return true;
  //     }
  //     return false;
  //   }

  click = () => {
    this.setState({});
  };
  render() {
    console.log("랜더링 테스트", this.state);
    return (
      <div>
        <button onClick={this.click}>Click</button>
      </div>
    );
  }
}

export default Test;
