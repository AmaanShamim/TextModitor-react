import React from "react";

function Alert(props) {
  const capitalised = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div style={{
      height: 50
    }}>
      {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalised(props.alert.type)}</strong>: {props.alert.message}
      </div>
      )}
    </div>
  );
}

export default Alert;
