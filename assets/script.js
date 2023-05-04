

//1.Add today's date at top of page
var now = dayjs();
document.getElementById("currentDay").textContent = dayjs()

// creates the visuals for the scheduler body

var hrRow = ""
//loop to dispaly 9am-18pm
for (var i = 9; i <= 18; i++) {
 
  // Creation of the row elements
  hrRow = $(`<div class="row py-1">`)
  col1 = $(`<div class ="col-2 col-md-1">${displayAmorPm(i)}</div>`);
  col2 = $(`<div class ="col-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`);
  col3 = $(`<div class ="col-2"><button data-id="${i}" id="saveBtn${i}" class="saveBtn btn-success btn-block" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i> Save</button></div>`);
 hrRow.append(col1,col2,col3);
  $("#display-planner").append(hrRow)
  getlocalStorage(i)
}

$(".saveBtn").click(function (e) {
  var id = $(this).data("id")
  console.log("this is ID: ", id)
  var inputText = $(this).parent().siblings().find("input").val()
  console.log("this is inputText: ", inputText)
  localStorage.setItem(id, inputText)
})

//  Convert Am to Pm
function displayAmorPm(hour) {
  var b = ""
  if (hour <= 12) {
    b = "AM"
  } else {
    b = "PM"
  }
  hour = hour % 12
  hour = hour ? hour : 12
  return hour + " " + b
};

function getlocalStorage(hour) {
  let inputval = localStorage.getItem(hour)
  //  $("input").data(`input${hour}`)
  $(`input#inputText${hour}`).val(inputval)
}


//Update color
function updateColor() {
  var hour = new Date().getHours();
  for (var i = 9; i <= 18; i++) {
    console.log(hour, i)
    if (hour == i) {
      $(`#inputText${i}`).css("background", "red")
    } else if (hour < i) {

      $(`#inputText${i}`).css("background", "lightblue")

    }
  }
}
setInterval(function () {
  updateColor()
}, 60000)

