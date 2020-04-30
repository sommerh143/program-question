$(document).ready(function(){
  $("#start").click(function(){
    $(".question").slideDown();
  });
 var age, color, animal, answer;

  $("#finish").click(function(){
  
  age = parseInt($("#age").val());
  color = parseInt($("#color").val());
  animal = parseInt($("#animal").val());
  answer = parseInt(age + color + animal);

  alert(answer);
  if (answer == 3){
  alert("c#");
  } else if (answer <= 5){
    alert("jquary");
    } else if (answer = 6){
      alert("c");
      }

  
})
});