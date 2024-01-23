var currentDayElement;
var todayformatDate;
$(function() {
    currentDayElement = $('#currentDay');
    todayformatDate = dayjs().format('D-MMMM-YYYY ..ddd') //day-month-year  format
    currentDayElement.text(todayformatDate);
});
$(document).ready(function() {
    var eventText;
    var eventTime;
    $(".time-block").on("click", ".saveBtn", function() {
        // Get the text entered for the event scheduled
        eventText = $(this).siblings(".inp").val();
        // Get the time for the event
        eventTime = $(this).parent().attr("id");
        // Save event text in local storage
        localStorage.setItem(eventTime, eventText);
    })
    var timeNow;
    var scheduledTime;
    //time traker for updateing classes for colors
    function timeTracker() {
        //get current hour.
        timeNow = moment().hour();
        // loop over time blocks
        $(".time-block").each(function() {
            scheduledTime = parseInt($(this).attr("id"));
            // Checks the time and add the classes for background color
            if (scheduledTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (scheduledTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    //run timeTracker for changing background color(not quite functional yet!)
    timeTracker();
    // Get item from local storage if any saved when refresh is called
    $("#9 .inp").val(localStorage.getItem("9"));
    $("#10 .inp").val(localStorage.getItem("10"));
    $("#11 .inp").val(localStorage.getItem("11"));
    $("#12 .inp").val(localStorage.getItem("12"));
    $("#13 .inp").val(localStorage.getItem("13"));
    $("#14 .inp").val(localStorage.getItem("14"));
    $("#15 .inp").val(localStorage.getItem("15"));
    $("#16 .inp").val(localStorage.getItem("16"));
    $("#17 .inp").val(localStorage.getItem("17"));
});