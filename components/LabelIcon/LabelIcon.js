import * as React from "react";

const LabelIcon = ({height, color, className}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
  >
    <path fill={color} d="M866-480 687-228q-18 25-42.955 39-24.954 14-54.045 14H189q-38.775 0-66.388-27.612Q95-230.225 95-269v-422q0-39.188 27.612-67.094Q150.225-786 189-786h401q29.091 0 54.056 15 24.966 15 42.944 39l179 252Zm-118 0L600.812-691H189v422h412l147-211Zm-559 0v211-422 211Z" />
  </svg>
)
export default LabelIcon;
