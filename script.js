let input = document.getElementsByTagName('input')[0];
console.log(input);

let buttons = document.querySelectorAll('button');

console.log(buttons);

let string = "";
let buttonArr = Array.from(buttons);

buttonArr.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if (e.target.innerText == "=") {
            string  = eval(string);
            input.value = string;
        }else if( e.target.innerText == "AC"){
            string = "";
            input.value =string;
        }else if (e.target.innerText == "DEL") {
            string = input.value.substring(0, input.value.length-1);
            input.value = string;
        }
        else{
        string += e.target.innerText;
        input.value = string;
        }
    })
});