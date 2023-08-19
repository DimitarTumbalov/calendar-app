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


      const date = month == 1 ? 
        new Date(year - 1, 12, simpleDate) : new Date(year, month - 1, simpleDate);

      calendar.push({
        isActive: false,
        date: date,
        simpleDate,
        isToday: curDateString == date.toDateString()
      });
    }

    //Add the dates of the chosen month
    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(year, month, i);

      calendar.push({
        isActive: true,
        date,
        simpleDate: i,
        isToday: curDateString == date.toDateString()
      });
    }


    //Add the first dates of the next month
    for (let i = lastWeekDay + 1; i <= 6; i++) {
      const simpleDate = i - lastWeekDay;
      const date = new Date(year, month + 1, simpleDate)

      calendar.push({
        isActive: false,
        date,
        simpleDate,
        isToday: curDateString == date.toDateString()
      });
    }

    return calendar;
}