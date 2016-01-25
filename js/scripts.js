function Places(location,landmarks, timeOfYear, notes){
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  // this.fullName = function() {
  //   return this.firstName + " " + this.lastName;
  // }
}

$(function(){
  $("form#newPlace").submit(function(event){
    event.preventDefault();
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();
    var newPlace = new Places(location,landmarks, timeOfYear, notes);
    $("#places").append("<li><span class='place'>"+newPlace.location+"</span></li>");

    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#timeOfYear").val("");
    $("input#notes").val("");

    $('.place').last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".time").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });
  });

});
