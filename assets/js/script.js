// Add Moment function to #currentDay
function DisplayDate(pFormat)
{
    var date = moment().format(pFormat);

    $("#currentDay").text(date);
}

// // Locks on click
// // Code forked from : https://codepen.io/skwintz/pen/GQgwbx
// $( ".lock" ).click(function() {
//     $(this).toggleClass('unlocked');
//   });