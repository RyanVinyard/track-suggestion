$(document).ready(function() {
  $("form#yourname").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    $("#yourname").hide("slow");
    $("#question1").show("slow");


  $("form#question1").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=answer1]:checked").val();
    if (answer1 === "front-end") {
      $("#question1").hide("slow");
      $("#question2f").show("slow");
    } else if (answer1 === "back-end") {

      $("#question1").hide("slow");
      $("#question2b").show("slow");

    }



  $("form#question2f").submit(function(event) {
    event.preventDefault();
    $("#question2f").hide("slow");
    $("#question3f").show("slow");
  })



  $("form#question3f").submit(function(event) {
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

    $("form#question2b").submit(function(event) {
      debugger;
      event.preventDefault();
      debugger;

      var answer2b = $("input:radio[name=answer2b]:checked").val();
      debugger;
      if (answer2b === "workforself") {
        $("#question2b").hide("slow");
        $("#question3bsticktheman").show("slow");
      } else if (answer2b === "workforcompany") {
        $("#question2b").hide("slow");
        $("#question3bcorporateslave").show("slow");
      };


    //Either answer causes reset back to "what is your name" question. Uncertain of problem. Upon revisiting, even if I bypass the question, after answering one question that puts you on the "back-end" track, the next one takes you back to the name box. Even commenting out everything but the "back-end" questions still produces this problem. It's always the question AFTER the first multiple choice that breaks it, so 3 questions in if you include the name question. ADDENDUM: When we comment out the "front-end" branch, only #question3bcorporateslave breaks it. I have gone through character by character and it looks just like the other questions, to me. Moving #question2b to be physically right after #question1 fixes this problem, mostly. There is a concept with branching and nesting that I am missing, but I'm still not certain what it is. I've put in debuggers all over #question2b, and it looks like they're not even getting read! Which would mean that the question is not even being reached in js, which is odd.//

  $("form#question3bsticktheman").submit(function(event) {
    event.preventDefault();
    var answer3bsticktheman = $("input:radio[name=answer3bsticktheman]:checked").val();
    if (answer3bsticktheman === "application") {
      $("#question3bsticktheman").hide("slow");
      $("#java").show("slow");
    } else if (answer3bsticktheman === "software") {
      $("#question3bsticktheman").hide("slow");
      $("#csharp").show("slow");
    };

  $("form#question3bcorporateslave").submit(function(event) {
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

      //I just want to stress that the neat looking animation when hitting submit is a complete accident, but it looks nice so I kept it.//
    };
  })
});

  });
  });


  });
});
});
