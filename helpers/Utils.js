import dayjs from 'dayjs';
import { DATE_FORMAT } from './Constants';

export const generateCalendarMonth = (year, month) => {
  month += 1
  const calendar = []; 

  const targetDate = dayjs([year, month, 1]);
  const curDate = dayjs();
  const curDateString = curDate.format(DATE_FORMAT);

  const prevMonthLastDate = targetDate.subtract(1, 'months').daysInMonth();
  const lastDate = targetDate.daysInMonth();
  const firstWeekDay = targetDate.day();
  const lastWeekDay = dayjs([year, month, lastDate]).day();

  //Add the last dates of the previous month
  for (let i = firstWeekDay - 1; i >= 0; i--) {
    const simpleDate = prevMonthLastDate - i;

    const date = month == 1 ? 
      dayjs([year - 1, 12, simpleDate]).format(DATE_FORMAT) : dayjs([year, month - 1, simpleDate]).format(DATE_FORMAT) 

    calendar.push({
      date,
      simpleDate,
    });
  }

  //Add the dates of the chosen month
  for (let i = 1; i <= lastDate; i++) {
    const item = {
      isActive: true,
      date: dayjs([year, month, i]),
      simpleDate: i, 
    }

    if(i == 1)
      item.isFirst = true;

    calendar.push(item);
  }


  //Add the first dates of the next month
  for (let i = lastWeekDay + 1; i <= 6; i++) {
    const simpleDate = i - lastWeekDay;
    const date = month == 12 ?
      dayjs([year + 1, 1, simpleDate]).format(DATE_FORMAT) : dayjs([year, month + 1, simpleDate]).format(DATE_FORMAT);

    const item = {
      date,
      simpleDate,
    }

    if(simpleDate == 1)
      item.isFirst = true;

    calendar.push(item);
  }


  const itemToday = calendar.find(i => i.date == curDateString);

  if(itemToday)
    itemToday.isToday = true;

  // console.log(calendar)
  return calendar;
}