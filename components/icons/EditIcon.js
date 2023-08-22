import * as React from "react";

const EditIcon = ({height, color, className}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
  >
    <path fill={color} d="M187-179h32l435-437-32-32-435 437v32Zm610-479L665-790l21-22q28-28 66.5-28.5T819-814l18 18q23 22 20.5 51T835-696l-38 38Zm-41 41L247-108H115v-132l508-508 133 131Zm-117-15-17-16 32 32-15-16Z" />
  </svg>
)
export default EditIcon;
