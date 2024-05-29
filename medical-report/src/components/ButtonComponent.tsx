import React from "react";
import "../css/ButtonComponent.css";
import Errors from "../interface/Error";
export default function ButtonComponent(props: {
  title: string;
  className: string;
  onClick: any;
  type?: any;
  error?: Errors;
}) {
  function hasNonEmptyMessage(obj: any) {
    for (let key in obj) {
      if (obj[key] && obj[key].trim() !== "") {
        return true;
      }
    }
    return false;
  }

  const onButtonClick = () => {
    const hasError = hasNonEmptyMessage(props.error);
    if (!hasError) {
      props.onClick();
    }
  };
  return (
    <button
      className={props.className}
      onClick={onButtonClick}
      type={props.type}
    >
      {props.title}
    </button>
  );
}
