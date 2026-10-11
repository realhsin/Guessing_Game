//testing if the js file is connecting with the html
console.log("Hello, I'm here !")

//decalring the variables
const guessing = document.querySelector("#guessing");
const button = document.querySelector("#submit");
const message = document.querySelector("#message");
const attemps = document.querySelector("#Attemps");
const final = document.querySelector("#FinalText");

//getting the random number
const randomInt =  Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

//counter and updating the attemps
let count = 0;
attemps.textContent = "Attemps : " + count;
//let username = 0;

//when the send button is pressed
button.addEventListener("click", function(){
    //checking everything is working
    console.log(randomInt);
    console.log(isNaN(Number(guessing.value)));

    //checking the guessing
    if (Number(guessing.value) === randomInt){
        message.textContent = "Correct";
        //updating the attemps and the quessing
        count = count + 1;
        attemps.textContent = "Attemps : " + count;
        final.textContent = "The number was "+randomInt+", You got it in "+count+" attemps.";
    }else if (guessing.value == "" || Number(guessing.value) <= 0 || Number(guessing.value) >= 101 || isNaN(Number(guessing.value)) === true ){
        message.textContent = "Error: Please check the number";
    }else if (Number(guessing.value) > randomInt){
        message.textContent = "Too high";
        count = count + 1;
        attemps.textContent = "Attemps : " + count;
    }else{
        message.textContent = "Too Low";
        count = count + 1;
        attemps.textContent = "Attemps : " + count;
    }
});