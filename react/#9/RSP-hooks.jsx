import React, { useState, useRef, useEffect } from "react";

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

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    //componentDidMount, componentDidUpdate
    interval.current = setInterval(changeHand, 100);

    return () => {
      //componentWillUnmount
      clearInterval(interval.current);
    };
  }, [imgCoord]); //imgCoord가 바뀔때 마다 실행

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = choice => {
    console.log(choice);
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다.");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다.");
      setScore(prevState => prevState + 1);
    } else {
      setResult("겼습니다.");
      setScore(prevState => prevState - 1);
    }

    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 2000);
  };

  //                       reslut, imgCoord, score
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount
  //                      class는 기준점 가로, hooks는 기준점 세로

  // class에서 라이프 사이클
  // componentDidMount() {
  //   this.ListeningStateChangedEvent({
  //     imgCoord : 3,
  //     score: 1,
  //     result: 2
  //   })
  // }
  // 한번에 3가지 변경가능

  // hooks에서 라이프 사이클
  // useEffect(() => {
  //   setImgCoord();
  // }, [imgCoord]);
  // useEffect(() => {
  //   setImgCoord();
  // }, [score]);
  // useEffect(() => {
  //   setImgCoord();
  // }, [result]);
  // 한번에 3가지 변경불가 (1개씩 혹은 2~3개씩 해야된다.)

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2) ${imgCoord} 0`
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={() => onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={() => onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={() => onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;
