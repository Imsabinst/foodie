import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="loader">
        <Spin tip="Loading..." />
      </div>
    </div>
  );
};

export default Loading;
