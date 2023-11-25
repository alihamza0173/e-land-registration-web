import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-2">
      <div
        className="spinner-border m-auto text-light text-center"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
