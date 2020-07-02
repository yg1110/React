import React, { memo } from "react";
import Tr from "./Tr";

const Table = memo(({ tableData, dispatch, memo }) => {
  return (
    <>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
    </>
  );
});

export default Table;
