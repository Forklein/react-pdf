import React from "react";

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber } = props;

  const increasePage = () => {
    if (pageNumber !== numPages) setPageNumber(pageNumber + 1);
  };

  const decreasePage = () => {
    if (pageNumber !== 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <i
        onClick={decreasePage}
        className="fa-solid fa-circle-arrow-left fa-2x"
      ></i>
      <p className="mt-3 mx-3">
        Page {pageNumber} of {numPages}
      </p>
      <i
        onClick={increasePage}
        className="fa-solid fa-circle-arrow-right fa-2x"
      ></i>
    </div>
  );
};

export default ControlPanel;
