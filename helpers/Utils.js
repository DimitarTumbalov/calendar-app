
export const generateCalendarMonth = (year, month) => {
  const calendar = []; 

  const curDate = new Date();
  const curDateString = curDate.toDateString();
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const firstWeekDay = new Date(year, month, 1).getDay();
  const lastWeekDay = new Date(year, month, lastDate).getDay();

  //Add the last dates of the previous month
  for (let i = firstWeekDay - 1; i >= 0; i--) {
    const simpleDate = prevMonthLastDate - i;

    const date = month == 0 ? 
      new Date(year - 1, 11, simpleDate) : new Date(year, month - 1, simpleDate);

    calendar.push({
      date: date,
      simpleDate,
    });
  }

  //Add the dates of the chosen month
  for (let i = 1; i <= lastDate; i++) {
    const date = new Date(year, month, i);

    const item = {
      isActive: true,
      date,
      simpleDate: i, 
    }

    if(i == 1)
      item.isFirst = true;

    calendar.push(item);
  }


  //Add the first dates of the next month
  for (let i = lastWeekDay + 1; i <= 6; i++) {
    const simpleDate = i - lastWeekDay;
    const date = month = 11 ?
      new Date(year + 1, 0, simpleDate) : new Date(year, month + 1, simpleDate)

    calendar.push({
      date,
      simpleDate,
    });
  }

  const itemToday = calendar.find(i => i.date.toDateString() == curDateString);

  if(itemToday)
    itemToday.isToday = true;

  return calendar;
}