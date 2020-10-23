function answersResult(total) {
  if (total < 10) {
    $("#python").show();
  } else if (total > 10 && total < 15) {
    $("#swift").show();
  } else if (total > 15 && total < 20) {
    $("#javascript").show();
  } else if (total > 20 && total <= 25) {
    $("#cSharp").show();
  }
}
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=experience]:checked").val());
    const answer2 = parseInt($("input:radio[name=os]:checked").val());
    const answer3 = parseInt($("input:radio[name=subject]:checked").val());
    const answer4 = parseInt($("input:radio[name=fishing]:checked").val());
    const answer5 = parseInt($("input:radio[name=resource]:checked").val());
    const answerTotal = answer1 + answer2 + answer3 + answer4 + answer5;
    $(".result").hide();
    $(".question").hide();

    answersResult(answerTotal);
  });
});