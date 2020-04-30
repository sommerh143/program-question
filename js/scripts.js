$(document).ready(function(){
  $("#start").click(function(){
    $(".question").slideDown();
  });

 var age, color, animal, answer;

  $("#finish").click(function(){
    age = parseInt($("#age").val());
    color = parseInt($("#color").val());
    animal = parseInt($("#animal").val());
    game = parseInt($("#game").val());
    year = parseInt($("#year").val());
    answer = parseInt(age + color + animal + game + year);

    if (answer == 5){
      $(".questionAnswer").slideDown();
      $("span").append("C#");
    } else if (answer <= 5){
      $(".questionAnswer").slideDown();
      $("span").append("Ruby");
    } else if (answer == 6){
        $(".questionAnswer").slideDown();
        $("span").append("Python");
    }
    
    $("#finish").click(function(){
      location.reload(true);
    });

    $("#yes").click(function(){
      location.reload(true);
    });
 
  });
});