// Business Logic
function Destination(place,landmark,date,notes) {
  this.place = place;
  this.landmark = landmark;
  this.date = date;
  this.notes = notes;
}

//User Interface
$(document).ready(function(){
  $("#new-destination").sumbit(function(event){

    var newPlace = $("input#new-place").val();
    var newLandmark = $("input#new-landmark").val();
    var newDate = $("input#new-date").val();
    var newNotes = $("input#new-notes").val();



  });
});
