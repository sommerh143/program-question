$(document).ready(function(){
  $("#start").click(function(){
    $(".question").slideDown();
  });
 var age, color, animal;

  $("#finish").click(function(){
  
  age = $("#age").val();
  color = $("#color").val();
  animal = $("#animal").val();
  alert(age);
  
})
});