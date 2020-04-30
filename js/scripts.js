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

    if (answer >= 5 && answer <= 15){
      $(".questionAnswer").slideDown();
      $("span").append("C#");
      $(".c").show();
    } else if (answer >= 16 && answer <= 20){
      $(".questionAnswer").slideDown();
      $("span").append("Ruby");
      $(".ruby").show();

    } else if (answer >=21 && answer <= 25){
        $(".questionAnswer").slideDown();
        $("span").append("Python");
        $(".python").show();

    }
    
    $("#finish").click(function(){
      location.reload(true);
    });

    $("#yes").click(function(){
      location.reload(true);
    });
 
  });
});