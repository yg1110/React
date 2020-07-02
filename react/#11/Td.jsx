import React, { useCallback, memo } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log("td render");
  const onclickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onclickTd}>{cellData}</td>;
});

export default Td;
