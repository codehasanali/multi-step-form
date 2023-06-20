import React from "react";
import wrapperStyles from "./wrapper.module.css";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={wrapperStyles.wrapper}>{children}</div>;
};

export default Wrapper;
