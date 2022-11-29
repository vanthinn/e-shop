import React from "react";
import "./Loading.css";

function Loading(props) {
  return (
    <div class="load-background">
      <div class="load-wrapper">
        <div class="load-circle">L</div>
        <div class="load-circle">O</div>
        <div class="load-circle">A</div>
        <div class="load-circle">D</div>
        <div class="load-circle">I</div>
        <div class="load-circle">N</div>
        <div class="load-circle">G</div>
      </div>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
