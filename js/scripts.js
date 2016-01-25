function Places(location,ladmarks, timeOfYear, notes){
  this.location = location;
  this.ladmarks = ladmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  // this.fullName = function() {
  //   return this.firstName + " " + this.lastName;
  // }
}

$(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var firstName = $("#new-first-name").val();
    var lastName = $("#new-last-name").val();
    var newContact = new Contact(firstName,lastName);
    $("#contacts").append("<li><span class='contact'>"+newContact.fullName()+"</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $('.contact').last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });

});
