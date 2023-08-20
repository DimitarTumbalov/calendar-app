import * as React from "react"
const DescriptionIcon = ({height, color, className}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
  >
    <path fill={color} d="M95-203v-95h531v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z" />
  </svg>
)
export default DescriptionIcon;