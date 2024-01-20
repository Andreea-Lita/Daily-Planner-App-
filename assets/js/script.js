$(function() {
    const currentDayElement = $('#currentDay');
    const today = dayjs();
    var todayformatDate = today.format('D-MMMM-YYYY ..dd') //day-month-year ..day names format
    currentDayElement.text(todayformatDate);
});