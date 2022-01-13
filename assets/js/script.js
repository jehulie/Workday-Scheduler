var displayDate = document.getElementById("currentDay");
var timeBlocksEl = document.getElementById("time-blocks");

var bizHours = [
    " 9 am",
    "10 am",
    "11 am",
    "12 pm",
    " 1 pm",
    " 2 pm",
    " 3 pm",
    " 4 pm",
    " 5 pm",
]

// Add Moment function to displayDate

function getTime() {
    var CurrentDate = moment().format('dddd, MMMM Do, YYYY');
    displayDate.innerHTML = CurrentDate;
}
setInterval(getTime, 1000);

// Generate all the time blocks from the bizHours array and display them
generateTimeblocks();
function generateTimeblocks() {
    timeBlocksEl.innerHTML = "";

    for (var i = 0; i < bizHours.length; i++) {
        var rowHour = bizHours[i];

        var row = document.createElement("div");
        row.classList.add("row");
        timeBlocksEl.appendChild(row);

        var hour = document.createElement("div");
        hour.innerHTML = rowHour;
        hour.classList.add("hour");
        row.appendChild(hour);

        var textarea = document.createElement("textarea");
        textarea.placeholder = "Enter your text here";
        textarea.setAttribute("class", "description");
        textarea.setAttribute("id", i);
        row.appendChild(textarea);

        var saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("saveBtn");
        saveBtn.setAttribute("value", i);
        row.appendChild(saveBtn);
    }
}

// // Locks on click
// // Code forked from : https://codepen.io/skwintz/pen/GQgwbx
// $( ".lock" ).click(function() {
//     $(this).toggleClass('unlocked');
//   });