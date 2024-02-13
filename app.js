const colors = ['red','blue','green','yellow','rgba(234,54,87)','purple','rgba(12,23,64)','grey'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){

    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
