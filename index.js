
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg= "dice"+randomNumber1+".png";
var randomDiceSource="images/"+randomDiceImg;
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2= "dice"+randomNumber2+".png";
var randomDiceSource2="images/"+randomDiceImg2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);
if(randomNumber1>randomNumber2){
document.querySelector('h1').innerHTML='player 1 wins'
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML='🚩🚩🚩player 2 wins'
    }



