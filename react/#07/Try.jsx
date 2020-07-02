import React, { PureComponent, memo, useState } from "react";

// class Try extends PureComponent {
//   constructor(props) {
//     super(props);
//     //다른 동작 가능
//     this.state = {
//       result: this.props.result,
//       try: this.props.try
//     };
//   }

//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

const Try = memo(({ tryInfo }) => {
  //props를 바꾸는방법 (원래는 안되지만, state에 넣어서 바꾼다.)
  // const [result, setResult] = useState(tryInfo.result);

  // const onClick = () => {
  //   setResult(1);
  // };
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
      {/* <div onClick={onClick}>{result}</div> */}
    </li>
  );
});
export default Try;
