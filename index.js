for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
       var ch=this.innerText;
       playSound(ch);
       buttonAnimation(ch);
    });

}
document.addEventListener("keypress",function(event)
{
    var ch=event.key;
    playSound(ch);
    buttonAnimation(ch);
});

function playSound(ch)
{
    if(ch=='w')
    {
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
    }
   else if(ch=='a')
   {
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
   }
   else if(ch=='s')
   {
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
   }
   else if(ch=='d')
   {
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
   }
   else if(ch=='j')
   {
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
   }
   else if(ch=='k')
   {
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
   }
   else if(ch=='l')
   {
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
   }
   else return;

   
}
function buttonAnimation(ch)
{
    if(ch=='s'||ch=='d'||ch=='j'||ch=='k'||ch=='l'||ch=='a')
    {
    console.log(ch);
    document.querySelector("."+ch).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("."+ch).classList.remove("pressed"); 
    },500);
  }
}
