var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().hours();
var currentDay = document.getElementById("currentDay");
var hourDescription = $(".description");
var text = document.createTextNode(
  moment().format("dddd") + ", " + moment().format("MMMM-DD-YYYY")
);
currentDay.appendChild(text);

if (times.includes(moment().format("hh A"))) {
  var timestring = moment().format("hh A");
  var index = times.indexOf(timestring);
  var timeBlock = timestring.substring(0, 2) + "block";
}

//change color on rows
changeRowColors = function () {
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("data-id"));

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
// button functioning
var taskTextInput = [];
$("button").click(function () {
  var taskTextInput = [
    $("#text01").val(),
    $("#text02").val(),
    $("#text03").val(),
    $("#text04").val(),
    $("#text05").val(),
    $("#text06").val(),
    $("#text07").val(),
    $("#text08").val(),
    $("#text09").val(),
  ];
  // local storage function
  localStorage.setItem("taskTextInput", JSON.stringify(taskTextInput));
});
// Load Tasks Storage function.
loadText = function () {
  // variable used to get and store the taskTextInput key values from local storage.
  var loadUserTasks = JSON.parse(localStorage.getItem("taskTextInput"));
  //Created storedTaskInputEl Variable and linked them to the ElementID "Text01, 02, 03, etc" and
  //matched them w/ the corresponding index for the loadUserTasks.
  var storedTaskInputEl = document.getElementById("text01");
  storedTaskInputEl.textContent = loadUserTasks[0];
  var storedTaskInputEl = document.getElementById("text02");
  storedTaskInputEl.textContent = loadUserTasks[1];
  var storedTaskInputEl = document.getElementById("text03");
  storedTaskInputEl.textContent = loadUserTasks[2];
  var storedTaskInputEl = document.getElementById("text04");
  storedTaskInputEl.textContent = loadUserTasks[3];
  var storedTaskInputEl = document.getElementById("text05");
  storedTaskInputEl.textContent = loadUserTasks[4];
  var storedTaskInputEl = document.getElementById("text06");
  storedTaskInputEl.textContent = loadUserTasks[5];
  var storedTaskInputEl = document.getElementById("text07");
  storedTaskInputEl.textContent = loadUserTasks[6];
  var storedTaskInputEl = document.getElementById("text08");
  storedTaskInputEl.textContent = loadUserTasks[7];
  var storedTaskInputEl = document.getElementById("text09");
  storedTaskInputEl.textContent = loadUserTasks[8];
};

// window onload command to call the loadTasks function upon refresh.
window.onload = function () {
  loadText();
};
