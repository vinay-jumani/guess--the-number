'use strict';

console.log(document.querySelector('.message').textContent);


// document.querySelector('.number') .textContent = 13;

// document.querySelector('.score') .textContent = 50;

// document.querySelector('.guess').value = 23;

let secret= Math.trunc(Math.random()*20)+1;

let score1=20;
let highscore =+0;
// console.log(secret);

let guessfunction= document.querySelector('.check').addEventListener('click',function guessfun() {
    let guess=(Number( document.querySelector('.guess').value));



if(!guess){
    document.querySelector('.message').textContent='😔   Please enter the number ';
}else if(guess===secret){

document.querySelector('.message').textContent="🥳   Right answer.Please press 'Again' button  to start again.The HighScore will remain the same ";
document.querySelector('.number').textContent=secret;

document.querySelector('.highscore').textContent=highscore+1;

document.querySelector('body').style.backgroundColor ='#84C4DE';
score1--;
document.querySelector('.score').textContent= score1;

let disable=document.querySelector('.check').disabled = true;

let tp=document.querySelector('.check');

// if(disable == true){
//     document.querySelector('.message').textContent='😔   Please enter the number    ';
// }


}else if(guess > 20) {
    document.querySelector('.message').textContent='Please select the number in the range of 20';
    document.querySelector('body').style.backgroundColor ='black';
}else if(guess > secret){
    if(score1 <= 0){
        document.querySelector('.message').textContent= "you lost the game ";
        document.querySelector('body').style.backgroundColor ='black';
    }else{

    document.querySelector('.message').textContent='📈   guess is so high';
    score1--;
    document.querySelector('.score').textContent= score1;

    document.querySelector('body').style.backgroundColor ='#F76F6F';
    }
}else if(guess < secret){
    if(score1 <= 0){
        document.querySelector('.message').textContent= "you lost the game ";
    }else{
    document.querySelector('.message').textContent='📉   guess is so low';
    score1--;
    document.querySelector('.score').textContent= score1;
    document.querySelector('body').style.backgroundColor ='#8686F0';
    }
}



if(score1 <= 0){
    document.querySelector('.score').textContent= "you can't play the game ";
}


} );



let hintfunction=document.querySelector('.Hint').addEventListener('click',function Hintfun(){
    
    score1=score1-5;
    document.querySelector('.score').textContent = score1;
    

    if(secret <= 5){
        document.querySelector('.answer').textContent='The number is between 1 to 5';
    }else if(secret <= 6 || secret<= 10 ){
        document.querySelector('.answer').textContent='The number is between 5 to 10';
    }else if(secret <10 || secret <=15 ){
        document.querySelector('.answer').textContent='The number is between 11 to 15 ';
    }else if(secret <15 || secret <=20 ){
        document.querySelector('.answer').textContent='The number is between 16 to 20 ';
    }

    let hintdis=document.querySelector('.Hint').disabled = true;

    



});

let againfunction=document.querySelector('.again').addEventListener('click' ,function againfun(){
    
    score1=20;
    secret= Math.trunc(Math.random()*20)+1;
    // console.log(secret);
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent= score1;
    document.querySelector('body').style.backgroundColor ='#222';
    let disable=document.querySelector('.check').disabled = false;
    highscore++;

    document.querySelector('.answer').textContent="Click the 'Hint' button to get the hint.5 point will cutted.";


    if(highscore ==20){
        document.querySelector('.highscore').textContent='The session is over refresh the browser to start from 0';
         disable=document.querySelector('.check').disabled = true;
         disable=document.querySelector('.again').disabled = true;
   }
    // guessfun();

    
        let hintdis=document.querySelector('.Hint').disabled = false;
    

});


