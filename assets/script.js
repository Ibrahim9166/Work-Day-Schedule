
$(function () {
  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, userInput);
  });
  
  $(".time-block").each(function () {
    // Get the id of the time-block.
    var timeBlockId = $(this).attr("id");
    // Get the current hour in 24-hour time using Day.js.
    var currentHour = dayjs().hour();
    // Compare the id to the current hour and apply the appropriate class.
    if (timeBlockId < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockId == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //
  $(".time-block").each(function () {
    // Get the id of the time-block.
    var timeBlockId = $(this).attr("id");
    // Get the user input from localStorage using the time-block id as a key.
    var userInput = localStorage.getItem(timeBlockId);
// Set the value of the textarea element to the user input.
    $(this).children(".description").val(userInput);
  });

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});

 // Set the time range for the calendar to 9am to 5pm.
 var startHour = 9;
 var endHour = 17;
 for (var i = startHour; i <= endHour; i++) {
   var timeBlock = $("#" + i);
   if (timeBlock.length) {
     timeBlock.children(".hour").text(dayjs().hour(i).format("ha"));
   }
 }
