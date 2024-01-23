$(function() {
    var currentDayElement = $('#currentDay');
    var todayformatDate = dayjs().format('D-MMMM-YYYY ..ddd') //day-month-year  format
    currentDayElement.text(todayformatDate);
});
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".inp").val();
        var time = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hour.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
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
})