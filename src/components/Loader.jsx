import React from "react";

const Loader = (props) => {
  const { isLoading } = props;
  if (!isLoading) return null;
  return (
    <div id="loader">
      <img
        src="https://react-pdf.org/images/logo.png"
        alt="loader"
        className="mb-5"
      ></img>
      <strong>LOADING...</strong>
    </div>
  );
};

export default Loader;
