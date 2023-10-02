const container = document.getElementById(".container");
const btn = document.getElementById(".green-bag button");

btn.addEventListener("click",()=>{
     container.classList.toggle("change");
});

const messages = {
    pravesh:
    "Dear [name] on your special day, I want you to know that you are not just a year older but a year wiser, more incredible, and a true source of inspiration. May this year bring you countless joys and achievements",
    shivani:
    "[name], your birthday is a reminder of the happiness you bring into our lives. May this day mark the beginning of a new chapter filled with love, adventure, and dreams coming true."
};

function displaymessage(){
    const name = document.getElementById("name").Value.toLowercase();
    const para = document.getElementById("para");
    para.style.whiteSpace = "per-line";

    if(messages[name]){
        para.textContent = messages[name];
    }else{
        para.textContent = "Good Bye!"
    }
    clearinput();
    const nameinput = document.getElementById("name");
    nameinput.classList.toggle("hidden");
    const namelabel1 = document.getElementById("label");
    namelabel1.classList.toggle("hidden");
    

}


 




