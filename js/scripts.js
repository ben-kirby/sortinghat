var add = function(colour, animal, activity){
  return colour + animal + activity;
}

//--------------------------------------

$(document).ready(function(){
  $("#add").click(function() {
    var number1 = parseInt($("#colour").val());
    var number2 = parseInt($("#animal").val());
    var number3 = parseInt($("#activity").val());
    var sum = number1 + number2 + number3;

    if (sum <= 3) {
      alert("GRYYYYYFINDOOOOOR");
    }
    else if (sum <= 6) {
      alert("SLYTHERIN");
    }
    else if (sum <= 9) {
      alert("HUFFLEPUF");
    }
    else if (sum <= 12) {
      alert("RAVENCLAW");
    }
  });


});
