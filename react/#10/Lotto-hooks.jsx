import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Ball from './Ball';

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45).fill().map((v,i) => i+1);
  const shuffle = [];
  
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p,c) => p - c);

  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  // useRef = 일반값 기억
  // useMemo = 함수의 결과값 기억
  // useCallback = 함수를 기억
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log('useEffect');

    for(let i = 0; i < winNumbers.length -1; i++){
      timeouts.current[i] = setTimeout(()=>{
        setWinBalls((prevState) =>  [...prevState, winNumbers[i]])
      }, (i+1) * 1000);
    }

    timeouts.current[6] = setTimeout(()=>{
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000)

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      })
    }
  }, [timeouts.current]); //배열에 요소가 없으면 componentDidMount만 수행, 바열에 요소가 있으면 componentDidMount와 componentUpdate 둘다 수행

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
}

export default Lotto;
