
// Get the door

let StoryO=document.querySelector(".StoryO");
let Door=document.querySelector(".Door");
let DoorC=document.querySelector(".DoorC");
    Door.addEventListener('click', function(){
        DoorC.style.display="block";
        StoryO.style.display="none";
    
})

// Escape with your family

let Escape=document.querySelector(".Escape");
let EscapeC=document.querySelector(".EscapeC");
    Escape.addEventListener('click', function(){
    EscapeC.style.display="block";
    StoryO.style.display="none";
    Door.style.display="none";
})

// Escape through a window

let Good=document.querySelector(".Good");
let Window=document.querySelector(".Window");
let DoorChoices=document.querySelector(".DoorChoices");
    Window.addEventListener('click', function(){
    Good.style.display="block";
    DoorChoices.style.display="none";
})

// Fight the enemies
let Bad=document.querySelector(".Bad");
let Fight=document.querySelector(".Fight");
    Fight.addEventListener('click', function(){
    Bad.style.display="block";
    DoorChoices.style.display="none";
})