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

export const MONTHS_SHORT = {
  0: 'Jan', 
  1: 'Feb', 
  2: 'Mar', 
  3: 'Apr', 
  4: 'May', 
  5: 'Jun',
  6: 'Jul', 
  7: 'Aug', 
  8: 'Sep', 
  9: 'Oct', 
  10: 'Nov', 
  11: 'Dec'
}

export const MONTHS = {
  0: 'January', 
  1: 'February', 
  2: 'March', 
  3: 'April', 
  4: 'May', 
  5: 'June',
  6: 'July', 
  7: 'August', 
  8: 'September', 
  9: 'October', 
  10: 'November', 
  11: 'December'
}

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

export const PRETTY_DATE_FORMAT = 'dddd, MMMM DD, YYYY';
export const DATE_FORMAT = 'YYYY/MM/DD';
export const TIME_FORMAT = 'H:mm'
