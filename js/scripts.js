//Bussiness Logic//
function set(){
  var names=document.getElementById('allNames').value;
  document.getElementById('person').innerHTML=names;
}

//U.I logic//
$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    var language = parseInt($("input:radio[name=Q1]:checked").val());
    var logic = parseInt($("input:radio[name=Q2]:checked").val());
    var method = parseInt($("input:radio[name=Q3]:checked").val());
    var constant = parseInt($("input:radio[name=Q4]:checked").val());
    var popup = parseInt($("input:radio[name=Q5]:checked").val());
    var array = parseInt($("input:radio[name=Q6]:checked").val());
    var display = parseInt((language + logic + method + constant + popup + array)/60*100);
    var name=$("input#allNames").val();
    $("#hide").slideDown();
    $("input").prop("disabled", true);
    $("#results").text(name+" "+"your score is :"+" "+display+"%");
  });

  $("#start").click(function(){
    $("#quiz").slideToggle();
  });

  $("#name").submit(function(){
    event.preventDefault();
    $("#name").hide();
    $("#name").slideDown();
  });

  $("#seeResults").click(function(){
    $("#begin").hide();
    $("#questions").hide();
    $("#answers").show();
  });
});
