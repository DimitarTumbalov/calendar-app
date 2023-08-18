  export const generateCalendarMonth = (year, month) => {
    const calendar = []; 

    const prevMonthLastDate = new Date(year, month, 0).getDate();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const firstWeekDay = new Date(year, month, 1).getDay();
    const lastWeekDay = new Date(year, month, lastDate).getDay();

    //Add the last dates of the previous month
    for (let i = firstWeekDay - 1; i >= 0; i--) {
      const simpleDate = prevMonthLastDate - i;

      calendar.push({
        active: false,
        date: new Date(year, month - 1, simpleDate)
      });
    }

    //Add the dates of the current month
    for (let i = 1; i <= lastDate; i++) {
      calendar.push({
        active: true,
        date: new Date(year, month, i)
      });
    }


    //Add the first dates of the next month
    for (let i = lastWeekDay + 1; i <= 6; i++) {
      const simpleDate = i - lastWeekDay;

      calendar.push({
        active: false,
        date: new Date(year, month + 1, simpleDate)
      });
    }

    return calendar;
}