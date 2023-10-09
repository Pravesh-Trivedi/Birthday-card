const contain = document.querySelector(".container");
const btn = document.querySelector("#button");

btn.addEventListener("click", () =>{
    contain.classList.toggle("change");
  
});


    
  
const messages = [
    "Your friendship is a treasure that enriches my life, a steadfast light in every twist and turn. Cheers to our enduring connection. May our friendship continue to shine brightly, illuminating our days with warmth and happiness. 🌟😊",

    "On this special day, may your life be filled with joy, love, and countless blessings. Happy birthday, [name]! 🎉🥳",
    
    "Wishing you a year filled with exciting adventures, wonderful surprises, and all the happiness you deserve, [name]. Happy birthday! 🎈🎂"
    ,
    "May your birthday be as sweet as the joy you bring to everyone's life, [name]. Here's to another year of unforgettable moments! 🍰🎁"
    ,
    "Today is a celebration of you, [name], and all the incredible moments we've shared. Happy birthday, my dear friend! 🎊❤️"
    ,
    "Another year, another opportunity for new memories and adventures. Wishing you a fantastic birthday, [name]! 🎂🌟"
    ,
    "You're not just a year older, but a year wiser and more amazing. May this birthday be the start of a remarkable chapter in your life, [name]. 🎂📖"
    ,
    "As the candles on your cake multiply, so do the wonderful experiences and cherished memories. Happy birthday, [name]! 🎂🕯️"
    ,
    "On this special day, I'm grateful for the gift of your friendship, [name]. Here's to many more years of laughter and joy! 🎉❤️"
    ,
    "Age is just a number, and you wear it gracefully, [name]. May this year be filled with laughter, love, and endless possibilities. Happy birthday! 🥂🎂",
    // Add more messages as needed
];

function display() {
    const nameInput = document.getElementById("name").value.trim();
    let para = document.getElementById("para");
    if (nameInput) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];
        const messageWithEnteredName = randomMessage.replace("[name]", nameInput);
        para.textContent = messageWithEnteredName;
    } else {
        para.textContent = "Please Enter your Name.";
    }

    clearinput();
        const name = document.querySelector(".inputdu");
        name.classList.toggle("hidden");
        const label = document.getElementById("label");
        label.classList.toggle("hidden");
  
 
}

function clearinput() {
    document.getElementById("name").value = "";
}




// function display(){
//     const name = document.getElementById("name").value.toLocaleLowerCase();
//     const para = document.getElementById("para");
//     para.style.whiteSpace = "per-line"; //this perserve new line and white space

//     if(message[name]){
//         para.textContent = message[name];
//     }else{
//         para.textContent= "Good Job Boi";
//     }


// clearinput();
// const nameinput = document.getElementById("name");
// nameinput.classList.toggle("hidden");
// const label = document.getElementById("label");
// label.classList.toggle("hidden");

// }