$(document).ready(function() {
  $("form#yourname").submit(function() {
    event.preventDefault();
    var username = $("#username").val();
    $("#yourname").hide("slow");
    $("#question1").show("slow");

  $("form#question1").submit(function() {
    event.preventDefault();
    var answer1 = $("input:radio[name=answer1]:checked").val();
    if (answer1 === "front-end") {
      $("#question1").hide("slow");
      $("#question2f").show("slow");
    } else if (answer1 === "back-end") {
      $("#question1").hide("slow");
      $("#question2b").show("slow");
    }

  $("form#question2f").submit(function() {
    event.preventDefault();
    var answer2f = $("input:radio[name=answer2f]:checked").val();
    $("#question2f").hide("slow");
    $("#question3f").show("slow");
  });

  $("form#question3f").submit(function() {
    event.preventDefault();
    var answer3f = $("input:radio[name=answer3f]:checked").val();
    if (answer3f === "backendforms") {
      $("#question3f").hide("slow");
      $("#php").show("slow");
    } else if (answer3f === "backendlittle") {
      $("#question3f").hide("slow");
      $("#css").show("slow");
    } else if (answer3f === "backendnone") {
      $("#question3f").hide("slow");
      $("#design").show("slow");
    }

  $("form#question2b").submit(function() {
    event.preventDefault();
    var answer2b = $("input:radio[name=answer2b]:checked").val();

  });
  });


  });
});
});
