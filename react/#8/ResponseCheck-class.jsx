import React, { PureComponent } from "react";

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: []
  };

  onClickScreen = () =>{
    
  };

  renderAverage = () =>{
    const { result } = this.state;
    return result.length ===0
    ? null
    : <div>평균시간: {result.reduce((a,c) => a+c)/ this.state.result.length}ms</div>
  }

  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        {this.renderAverage()}
        
      </>
    );
  }
}

export default ResponseCheck;
