// Detcting Button Press

let numOdDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOdDrumBtn; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detecting keyboard press

document.addEventListener("keydown", function (event){
    playSound(event.key);
    buttonAnimation(event.key);
});

//play Sound

function playSound(key){
    let audio;

    switch(key){
        case("w"):
            new Audio("sounds/tom-1.mp3").play();
            break;
        case("a"):
            new Audio("sounds/tom-2.mp3").play();
            break;
        case("s"):
            new Audio("sounds/tom-3.mp3").play();
            break;
        case("d"):
            new Audio("sounds/tom-4.mp3").play();
            break;
        case("j"):
            new Audio("sounds/crash.mp3").play();
            break;
        case("k"):
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case("l"):
            new Audio("sounds/snare.mp3").play();
            break;
        default:
            console.log(i);
    }
}

// Animate Button

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}