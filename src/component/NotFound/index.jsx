import React from "react";
import PropTypes from "prop-types";

function NotFound(props) {
  return (
    <div className="text-[50px] text-[steelblue] text-center m-[100px] overflow-y-hidden max-h-[100vh]">
      <div className="">Oops!</div>
      <div className="text-bold text-[250px]">404</div>
      <div className="text-[35px]">
        Sorry, couldn't find what you're looking for
      </div>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
