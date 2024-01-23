var currentDayElement;
var todayformatDate;
$(function() {
    currentDayElement = $('#currentDay');
    todayformatDate = dayjs().format('D-MMMM-YYYY ..ddd') //day-month-year  format
    currentDayElement.text(todayformatDate);
});

$(document).ready(function() {
    var text;
    var time;
    $(".time-block").on("click", ".saveBtn", function() {
        text = $(this).siblings(".inp").val();
        time = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(time, text);
    })
    var timeNow;
    var blockTime;
    //time traker for updateing classes for colors
    function timeTracker() {
        //get current number of hour.
        timeNow = moment().hour();
        // loop over time blocks
        $(".time-block").each(function() {
            blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // To check the time and add the classes for background color
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
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
    $("#1 .inp").val(localStorage.getItem("1"));
    $("#2 .inp").val(localStorage.getItem("2"));
    $("#3 .inp").val(localStorage.getItem("3"));
    $("#9 .inp").val(localStorage.getItem("9"));
    $("#01 .inp").val(localStorage.getItem("01"));
});