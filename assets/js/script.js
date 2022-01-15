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

var idHours = [
    "9_am",
    "10_am",
    "11_am",
    "12_pm",
    "1_pm",
    "2_pm",
    "3_pm",
    "4_pm",
    "5_pm",
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
        var storageHour = idHours[i];

        var row = document.createElement("div");
        row.classList.add("row");
        timeBlocksEl.appendChild(row);
        row.setAttribute("id",storageHour)

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
        // saveBtn.setAtrribute("class", "lock");
        row.appendChild(saveBtn);
    }
    GetStoredNotes();
}

// The save button function that allows the user to save their notes.
$(document).on('click','.saveBtn',function(){
    var SaveBtnValue = $(this).parent().attr("id");
    var savedNotes = $(this).siblings('.description').val()
    localStorage.setItem(SaveBtnValue, savedNotes);
});

// The get stored notes function that gets the stored notes and loads them when the page is loaded. ** Not storing right now! **
function GetStoredNotes() {
    console.log("inside GetStoredNotes");
    $('#9_am .description').val(localStorage.getItem("9_am"))
    
}

// The update time block function that updates the color of the blocks.
function UpdateTimeBlocks() {
    var GetCurrentHR = moment().format('h a');
    var CurrentHour = moment(GetCurrentHR, 'h a');
    var Descriptions = document.getElementsByClassName('description')
    
    for (var i = 0; i < Descriptions.length; i++) {
        var TimeBlock = moment(bizHours[i], 'h a');
        if (CurrentHour.isSame(TimeBlock) === true) {
            Descriptions[i].classList.add('present')
            Descriptions[i].classList.remove('future')
            Descriptions[i].classList.remove('past')
        } else if (CurrentHour.isBefore(TimeBlock) === true) {
            Descriptions[i].classList.add('future')
            Descriptions[i].classList.remove('past')
            Descriptions[i].classList.remove('present')
        } else if (CurrentHour.isBefore(TimeBlock) === false) {
            Descriptions[i].classList.add('past')
            Descriptions[i].classList.remove('future')
            Descriptions[i].classList.remove('present')
        }
    }
} 
UpdateTimeBlocks()
setInterval(UpdateTimeBlocks, 10000);
GetStoredNotes();
$('#9_am .description').val(localStorage.getItem("9_am"))