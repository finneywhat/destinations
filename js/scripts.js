// Business Logic
function Area(place, landmark, date, notes) {
  this.place1 = place;
  this.landmark1 = landmark;
  this.date1 = date;
  this.notes1 = notes;
}

//User Interface
$(document).ready(function(){
  $("form#new-destination").submit(function(event){
    event.preventDefault();
debugger;
    var newPlace = $("input#new-place").val();
    var newLandmark = $("input#new-landmark").val();
    var newDate = $("input#new-date").val();
    var newNotes = $("input#new-notes").val();

    var newDestiny = new Area(newPlace, newLandmark, newDate, newNotes);

    $("ul#destinations").append("<li><span class='clickable'>" + newDestiny.place1 + "</span></li>");

    $(".clickable").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newDestiny.place1);
      $(".new-place").text(newDestiny.place1);
      $(".new-landmark").text(newDestiny.landmark1);
      $(".new-date").text(newDestiny.date1);
      $(".new-notes").text(newDestiny.notes1);

    });
    $("input#new-place").val("");
    $("input#new-landmark").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");
  });
});
