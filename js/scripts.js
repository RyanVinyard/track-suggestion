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
    };

  $("form#question2b").submit(function() {
    event.preventDefault();
    var answer2b = $("input:radio[name=answer2b]:checked").val();
    if (answer2b === "workforself") {
      $("#question2b").hide("slow");
      $("#question3bsticktheman").show("slow");
    } else if (answer2b === "workforcompany") {
      $("#question2b").hide("slow");
      $("#question3b-corporate-slave").show("slow");
    };

  $("form#question3bsticktheman").submit(function() {
    event.preventDefault();
    var answer3bsticktheman = $("input:radio[name=answer3bsticktheman]:checked").val();
    if (answer3bsticktheman === "application") {
      $("#question3bsticktheman").hide("slow");
      $("#java").show("slow");
    } else if (answer3bsticktheman === "software") {
      $("#question3bsticktheman").hide("slow");
      $("#csharp").show("slow");
    };

  $("form#question3bcorporateslave").submit(function() {
    event.preventDefault();
    var answer3bcorporateslave = $("input:radio[name=answer3bcorporateslave]:checked").val();
    if (answer3bcorporateslave === "business-software") {
      $("#question3bcorporateslave").hide("slow");
      $("#csharp").show("slow");
    } else if (answer3bcorporateslave === "mobileapps") {
      $("#question3bcorporateslave").hide("slow");
      $("#java").show("slow");
    } else if (answer3bcorporateslave === "websites") {
      $("#question3bcorporateslave").hide("slow");
      $("#php").show("slow");
    };
    console.log(username);
  });
});

  });
  });


  });
});
});
