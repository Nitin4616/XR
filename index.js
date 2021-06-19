var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
var buttonClicked=this.innerHTML;
press(buttonClicked);
buttonAnimation(buttonClicked);


});
}
document.addEventListener("keypress",function(event){
  press(event.key);
  buttonAnimation(event.key);
});
function press(key){
  var file="";
  switch (key) {
    case "w":
    file="tom-1.mp3";

      break;
    case "a":
    file="tom-2.mp3";

        break;
    case "s":
    file="tom-3.mp3";

          break;
    case "d":
    file="tom-4.mp3";

            break;
    case "j":
    file="crash.mp3";
    break;
    case "k":
    file="kick-bass.mp3";
    break;
    case "l":
    file="snare.mp3";
      break;

      default:
      file="ss.mp3";
      
}
      var audio=new Audio(file);
      audio.play();

}
function buttonAnimation(buttonType){
  var activeButton=document.querySelector("."+buttonType);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
