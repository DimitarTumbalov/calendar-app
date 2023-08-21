import dayjs from "dayjs";
import * as React from "react";

const CalendarIcon = ({height}) => {
  const curDate = dayjs();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 200 200"
      height={height}
    >
      <path
        fill="#FFF"
        d="m152.632 47.368-47.368-5.263-57.895 5.263L42.105 100l5.263 52.632L100 159.211l52.632-6.579 5.263-53.947-5.263-51.317z"
      />
      <path
        fill="#EA4335"
        d="M152.632 200 200 152.632l-23.684-10.526-23.684 10.526-10.526 23.684L152.632 200z"
      />
      <path
        fill="#34A853"
        d="M36.842 176.316 47.368 200h105.263v-47.368H47.368l-10.526 23.684z"
      />
      <path
        fill="#4285F4"
        d="M15.789 0C7.066 0 0 7.066 0 15.789v136.842l23.684 10.526 23.684-10.526V47.368h105.263l10.526-23.684L152.632 0H15.789z"
      />
      <path
        fill="#188038"
        d="M0 152.632v31.579C0 192.935 7.066 200 15.789 200h31.579v-47.368H0z"
      />
      <path
        fill="#FBBC04"
        d="M152.632 47.368v105.263H200V47.368l-23.684-10.526-23.684 10.526z"
      />
      <path
        fill="#1967D2"
        d="M200 47.368V15.789C200 7.065 192.934 0 184.211 0h-31.579v47.368H200z"
      />
  
      <text 
        fill="#4285F4"
        x="50%" y="54%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontSize='5rem'
        fontWeight='500'>
        {curDate.date()}
      </text>  
    </svg>
  )
}
export default CalendarIcon;
