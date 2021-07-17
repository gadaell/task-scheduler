// //Date Code
// const d = new Date();

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const days = [
//   "Sunday,",
//   "Monday,",
//   "Tuesday,",
//   "Wednesday,",
//   "Thursday,",
//   "Friday,",
//   "Saturday,",
// ];
// document.getElementById("day").innerHTML = days[d.getDay()];
// document.getElementById("date").innerHTML = d.getDate();
// document.getElementById("month").innerHTML = months[d.getMonth()];
// document.getElementById("year").innerHTML = d.getFullYear();

//Date Code
var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().hours();
var currentDay = document.getElementById("currentDay");
var hourDescription = $(".description");
console.log(hourDescription);
var text = document.createTextNode(
  moment().format("dddd") + ", " + moment().format("MMMM-DD-YYYY")
);
currentDay.appendChild(text);

if (times.includes(moment().format("hh A"))) {
  var timestring = moment().format("hh A");
  var index = times.indexOf(timestring);
  var timeBlock = timestring.substring(0, 2) + "block";
}
console.log(document.getElementsByClassName("description"));

console.log(hourDescription);

//change color on rows
changeRowColors = function () {
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("data-id"));
    console.log(timeBlockHour);

    if (timeBlockHour == currentTime) {
      $(this).addClass("present");
    } else if (timeBlockHour > currentTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("past");
    }
  });
};
changeRowColors();
// document
//   .getElementById(timeBlock)
//   .getElementsByClassName("hour")
//   .remove("past");
// document
//   .getElementById(timeBlock)
//   .getElementsByClassName("hour")
//   .remove("future");
