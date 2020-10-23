function answersResult(total) {
  if (total < 20) {
    $("#python").fadeIn();
  } else if (total >= 20 && total < 30) {
    $("#swift").fadeIn();
  } else if (total >= 30 && total < 40) {
    $("#javascript").fadeIn();
  } else if (total >= 40 && total <= 50) {
    $("#cSharp").fadeIn();
  }
}
$(document).ready(function() {
  $("form#favColor").submit(function(event) {
    event.preventDefault();
    const backColor = $("#color").val();
    document.body.style.background = backColor;
    $(".color-select").fadeOut();
    $("#question-one").fadeIn();
    $("img").fadeIn();
  });

  $("#question1-next").click(function(event) {
    event.preventDefault();
    $("#question-one").hide();
    $("#question-two").show();
  });
  $("#question2-next").click(function(event) {
    event.preventDefault();
    $("#question-two").hide();
    $("#question-three").show();
  });
  $("#question2-back").click(function(event) {
    event.preventDefault();
    $("#question-two").hide();
    $("#question-one").show();
  });
  $("#question3-next").click(function(event) {
    event.preventDefault();
    $("#question-three").hide();
    $("#question-four").show();
  });
  $("#question3-back").click(function(event) {
    event.preventDefault();
    $("#question-three").hide();
    $("#question-two").show();
  });
  $("#question4-next").click(function(event) {
    event.preventDefault();
    $("#question-four").hide();
    $("#question-five").show();
  });
  $("#question4-back").click(function(event) {
    event.preventDefault();
    $("#question-four").hide();
    $("#question-three").show();
  });
  $("#question5-next").click(function(event) {
    event.preventDefault();
    $("#question-five").hide();
    $("#question-six").show();
  });
  $("#question5-back").click(function(event) {
    event.preventDefault();
    $("#question-five").hide();
    $("#question-four").show();
  });
  $("#question6-next").click(function(event) {
    event.preventDefault();
    $("#question-six").hide();
    $("#question-seven").show();
  });
  $("#question6-back").click(function(event) {
    event.preventDefault();
    $("#question-six").hide();
    $("#question-five").show();
  });
  $("#question7-next").click(function(event) {
    event.preventDefault();
    $("#question-seven").hide();
    $("#question-eight").show();
  });
  $("#question7-back").click(function(event) {
    event.preventDefault();
    $("#question-seven").hide();
    $("#question-six").show();
  });
  $("#question8-next").click(function(event) {
    event.preventDefault();
    $("#question-eight").hide();
    $("#question-nine").show();
  });
  $("#question8-back").click(function(event) {
    event.preventDefault();
    $("#question-eight").hide();
    $("#question-seven").show();
  });
  $("#question9-next").click(function(event) {
    event.preventDefault();
    $("#question-nine").hide();
    $("#question-ten").show();
  });
  $("#question9-back").click(function(event) {
    event.preventDefault();
    $("#question-nine").hide();
    $("#question-eight").show();
  });
  $("#question10-back").click(function(event) {
    event.preventDefault();
    $("#question-ten").hide();
    $("#question-nine").show();
  });

  $("form#survey").submit(function(event) {
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=experience]:checked").val());
    const answer2 = parseInt($("input:radio[name=os]:checked").val());
    const answer3 = parseInt($("input:radio[name=subject]:checked").val());
    const answer4 = parseInt($("input:radio[name=fishing]:checked").val());
    const answer5 = parseInt($("input:radio[name=resource]:checked").val());
    const answer6 = parseInt($("input:radio[name=music]:checked").val());
    const answer7 = parseInt($("input:radio[name=program-type]:checked").val());
    const answer8 = parseInt($("input:radio[name=lawnMower]:checked").val());
    const answer9 = parseInt($("input:radio[name=group]:checked").val());
    const answer10 = parseInt($("input:radio[name=name]:checked").val());
    const answersTotal = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9 + answer10;
    $(".result").hide();
    $(".question").hide();

    answersResult(answersTotal);
  });
  $("form#retake").submit(function(event) {
    event.preventDefault();
    location.reload();
  });
});