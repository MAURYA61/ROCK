let input = document.getElementById("inputBox");
let Buttons = document.querySelectorAll("Button");

let string = "";
let arr = Array.from(Buttons);
arr.forEach(Button => {
    Button.addEentnListener("click",(e) =>{
        if(e.target.innerHTML == "="){
            string = evel(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})