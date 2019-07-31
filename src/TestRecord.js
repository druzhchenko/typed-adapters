// @flow

import React from "react";
import response from "./response";
import makeDocRecord from "./adapters/Doc";
import { makeResponseRecord } from "./adapters/Response";

const TestRecord = () => {
  const record = makeResponseRecord(response, makeDocRecord);
  console.log(record);

  return <div className="App">TEST RECORD</div>;
};

export default TestRecord;
