
function login(){
  player1_name=document.getElementById("player1_name").value;
  player2_name=document.getElementById("player2_name").value;
  localStorage.setItem("Name1",player1_name);
  localStorage.setItem("Name2",player2_name);
  window.location="quiz_game.html";

}
