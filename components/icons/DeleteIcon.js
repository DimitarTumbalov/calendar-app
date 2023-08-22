import * as React from "react";

const DeleteIcon = ({height, color, className}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
  >
    <path fill={color} d="M253-95q-40.212 0-67.606-27.1Q158-149.2 158-189v-553h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463-95 707-95H253Zm454-647H253v553h454v-553ZM354-267h77v-399h-77v399Zm175 0h78v-399h-78v399ZM253-742v553-553Z" />
  </svg>
)
export default DeleteIcon;
