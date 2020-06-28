import React, { Component } from "react";

// 클래스일 경우 -> constructor -> render -> ref -> componentDidMount
// setState/Props 바뀔때 -> sholdComponentUpdate -> render -> componentDidUpdate
// 부모가 나를 없앨때 -> componentWillUnMount -> 소멸

const rspCoords = {
  바위: "0",
  가위: "-135px",
  보: "-284px"
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1
};

const computerChoice = imgCoord => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};
class RSP extends Component {
  state = {
    result: "",
    imgCoord: "0",
    score: 0
  };

  componentDidMount() {
    // 컴포넌트 첫 랜더링 후
    this.interval = setInterval(this.changeHand, 100);
  }

  ComponentWillUnmount() {
    // 컴포넌트 제거되기 전
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위
      });
    }
  };

  onClickBtn = choice => () => {
    clearInterval(this.interval);
    const { imgCoord } = this.state;
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: "비겼습니다."
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState(prevState => {
        return {
          result: "이겼습니다.",
          score: prevState.score + 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          result: "졌습니다.",
          score: prevState.score - 1
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 2000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2) ${imgCoord} 0`
          }}
        ></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
