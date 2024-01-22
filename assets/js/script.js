$(function() {
    const currentDayElement = $('#currentDay');
    var todayformatDate = dayjs().format('D-MMMM-YYYY ..ddd') //day-month-year  format
    currentDayElement.text(todayformatDate);
});