const bot = document.querySelectorAll('.bot');
const textstyle = document.querySelectorAll('.textstyle');
const input = document.querySelector('input');

console.log()
let bool = false;

bot[2].addEventListener('click', function () {

    if (bool) {
        textstyle[1].innerHTML = (1.8 * Number(input.value)) + 32;
    } else {
        textstyle[1].innerHTML = (Number(input.value) - 32)/1.8;
    }
})

bot[1].addEventListener('click', function (event) {
    textstyle[1].innerHTML = "";
    input.value = "";
})
bot[0].addEventListener('click', (event) => {
    if (bool) {
        textstyle[0].innerHTML = "convert C to F";
        document.title = "convert C to F";
        input.setAttribute('placeholder', '  C')
        bool = false;
    } else {
        textstyle[0].innerHTML = "convert F to C";
        input.setAttribute('placeholder', '  F')
        document.title = "convert F to C";
        bool = true;
    }

})