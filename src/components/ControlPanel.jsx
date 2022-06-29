import React from "react";

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber } = props;

  const increasePage = () => {
    if (pageNumber !== numPages) setPageNumber(pageNumber + 1);
  };

  const decreasePage = () => {
    if (pageNumber !== 1) setPageNumber(pageNumber - 1);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  //   const inputEl = useRef("");
  //   const onButtonClick = () => {
  //     alert(inputEl.current.value);
  //   };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      {/* <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Alert</button> */}
      <i
        onClick={decreasePage}
        className="fa-solid fa-circle-arrow-left fa-2x pointer"
      ></i>
      <span>
        <input
          type="number"
          className="mx-2 w-50"
          value={pageNumber}
          min={1}
          max={numPages}
          onChange={onPageChange}
        />
        of &nbsp;
        {numPages}
      </span>
      <i
        onClick={increasePage}
        className="fa-solid fa-circle-arrow-right fa-2x pointer"
      ></i>
    </div>
  );
};

export default ControlPanel;
