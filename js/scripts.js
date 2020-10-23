function answersResult(total) {
  if (total < 20) {
    $("#python").show();
  } else if (total >= 20 && total < 30) {
    $("#swift").show();
  } else if (total >= 30 && total < 40) {
    $("#javascript").show();
  } else if (total >= 40 && total <= 50) {
    $("#cSharp").show();
  }
}
$(document).ready(function() {
  $("form#favColor").submit(function(event) {
    event.preventDefault();
    const backColor = $("#color").val();
    document.body.style.background = backColor;
    $(".color-select").hide();
    $(".question").show();
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
});