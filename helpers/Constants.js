import colors from '@/colors.module.scss';

export const API_URL = 'http://localhost:3000/api';

export const WEEK_DAYS_SHORT = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S',
]

export const WEEK_DAYS = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
]

export const MONTHS_SHORT = [
  'Jan', 
  'Feb', 
  'Mar', 
  'Apr', 
  'May', 
  'Jun',
  'Jul', 
  'Aug', 
  'Sep', 
  'Oct', 
  'Nov', 
  'Dec'
]


export const MONTHS = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June',
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]

export const TABS = [
  'Day',
  'Month',
  'Year'
]

export const HOUR_OPTIONS = [
  0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
];

export const MINUTE_OPTIONS = [
  '00', '15', '30', '45'
];


const TIME_OPTIONS = [];

HOUR_OPTIONS.forEach(h => {
  MINUTE_OPTIONS.forEach(m => {
    TIME_OPTIONS.push(`${h}:${m}`);
  })
})

export { TIME_OPTIONS };

export const PRETTY_DATE_FORMAT = 'dddd, MMMM D, YYYY';
export const WEEK_DAY_FORMAT = 'ddd D'
export const DATE_FORMAT = 'YYYY/MM/DD';
export const TIME_FORMAT = 'H:mm'
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export const REGEX = {
  EVENT_TITLE: /^[a-z\d-_ ]{1,50}$/i,
  EVENT_DESCRIPTION: /^[a-z\d-_ ]{0,250}$/i
}

export const LABEL_COLORS = [
  colors.colorLabel0,
  colors.colorLabel1,
  colors.colorLabel2,
  colors.colorLabel3,
  colors.colorLabel4
]

export const SCREEN_BREAKPOINTS = {
  MEDIUM: 768
}