import React, { PureComponent } from "react";

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: []
  };

  onClickScreen = () =>{
    const { state, message, result} = this.state;
    if(state === 'waiting'){
      this.setState({
        state: 'ready',
        message: '조록색이 되면 클릭하세요.'
      });
      this.timeout = setTimeout( () => {
        this.setState({
          state:'now',
          message: '지금 클릭'
        })
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000)
    } else if( state === 'ready'){
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 빠름'
      })
    } else if( state === 'now'){
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime]
        }
      })
    }
  }

  onReset = () =>{
    this.setState({
      result: []
    })
  }

  renderAverage = () =>{
    const { result } = this.state;
    return result.length ===0
    ? null
    : <>
      <div>평균시간: {result.reduce((a,c) => a+c)/ this.state.result.length}ms</div>
      <button onClick={this.onReset}>리셋</button>
    </>
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
