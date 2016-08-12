$(document).ready(function() {
  $("form#yourname").submit(function() {
    event.preventDefault();
    var username = $("#username").val();
    $("#yourname").hide("slow");
    $("#question1").show("slow");
  $("form#question1").submit(function() {
    event.preventDefault();
    var whichtrack = $("#answer1")
    if (whichtrack === "front-end") {
      $("#question1").hide("slow");
      $("#question2f").show("slow");
    } else if (whichtrack === "back-end") {
      $("#question1").hide("slow");
      $("#question2b").show("slow");
    }
  });
});
});
