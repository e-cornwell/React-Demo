let ul = document.querySelector('ul');
let button = document.querySelector('button')
let h1 = document.querySelector('h1')

let numbers = [3, 4];

button.addEventListener('click', function(){
    let rnd = Math.ceil(Math.random() * 10);
    numbers.push(rnd)
    render();
});

function render(){
    let sum = numbers.reduce(function(acc, number){
        return acc + number;
    }, 0)
    
    let html = numbers.map(function(number){
        return`<li>${number}</li>`;
    }).join('');
    ul.innerHTML = html;

    h1.innerText = `The sum is ${sum}`;
}

render();