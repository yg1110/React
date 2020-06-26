import React, {Component} from 'react';

// 클래스일 경우 -> constructor -> render -> ref -> componentDidMount
// setState/Props 바뀔때 -> sholdComponentUpdate -> render -> componentDidUpdate
// 부모가 나를 없앨때 -> componentWillUnMount -> 소멸


class RSP extends React {
    state = {
        result: '',
        imgCoord: 0,
        score: 0
    };

    componentDidMount(){ // 컴포넌트 첫 랜더링 후

    }

    componentDidUpdate() { // 리렌더링 후

    }

    ComponentWillUnmount(){ // 컴포넌트 제거되기 전

    }

    render() {
        const { result, score, imgCoord } = this.state;
        return (
            <>
                <div id="computer" style={{background:`url(https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2) ${imgCoord} 0`}}></div>
                <div>
                    <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{reuslt}</div>
                <div>현재 {score}점</div>
            </>
        )
    }
}

export default RSP;