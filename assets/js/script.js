var displayDate = document.getElementById("currentDay");
var timeBlocksEl = document.getElementById("time-blocks");

// Add Moment function to displayDate

function GetTime() {
    var CurrentDate = moment().format('dddd, MMMM Do, YYYY');
    displayDate.innerHTML = CurrentDate;
}
setInterval(GetTime, 1000);


// // Locks on click
// // Code forked from : https://codepen.io/skwintz/pen/GQgwbx
// $( ".lock" ).click(function() {
//     $(this).toggleClass('unlocked');
//   });