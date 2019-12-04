  


// Перше завдання
let a = prompt('Задаш фон кольором чи даш на нього посилання?Введи "колір" або "посилання" ')
if(a == 'колір'){
    let back1 = prompt('Введіть колір у форматі # або якому завгодно іншому');
    let back = document.querySelector('body');
back.style.backgroundColor = back1 ;
}else if(a == 'посилання'){
let back2 = prompt('Введіть посилання на ваш фон!');
let back = document.querySelector('body');
    let back3 = 'url(' + back2  + ')';
    console.log(back3);
back.style.backgroundImage = back3;
}
// Кінець Першого Завдання



// Друге завдання
let back = document.querySelector('body');
let family = prompt('Введіть назву шрифта');
console.log(family);
back.style.fontFamily = family;
// Кінець другого завдання 

// Трете завдання
let textposition = prompt('введіть позицію h1, наприклад center')
let align = document.querySelector('h1');
align.style.textAlign = textposition;
// Кінець третього завдання


//Четверте завдання
let backforp = prompt('Задаш фон кольором чи даш на нього посилання?Введи "колір" або "посилання" ')
let align = document.querySelector('p');
if(backforp == 'колір'){
    let back4 = prompt('Введіть колір у форматі # або якому завгодно іншому');
    let back = document.querySelector('p');
back.style.backgroundColor = back4 ;
}else if(backforp == 'посилання'){
let back5 = prompt('Введіть посилання на ваш фон!');
let back = document.querySelector('p');
    let back6 = 'url(' + back5  + ')';
    console.log(back6);
back.style.backgroundImage = back6;
}
//// Кінець четвертого завдання





Тут завдання п'яте і додаткове  (це "ДОДАТОК ДО ЗАВДАННЯ")

let site1 = prompt();
let link1 = document.querySelector('a:nth-child(1)');
console.log(link1);
link1.innerHTML =  site1 ;
link1.href =  site1 ;

let site2 = prompt();
let link2 = document.querySelector('a:nth-child(2)');
console.log(link2);
link2.innerHTML =  site2 ;
link2.href =  site2 ;


let site3 = prompt();
let link3 = document.querySelector('a:nth-child(3)');
console.log(link3);
link3.innerHTML =  site3 ;
link3.href =  site3 ;
 кінець завдання 5

Початок Завдання шість
document.querySelector('div').style.color = '#00FF00';
 document.querySelector('div').style.fontSize = '200px';
document.querySelector('div').style.fontWeight = '300px';
//align.style.textAlign = 'center';

let align = document.querySelector('h1');
align.style.textAlign = 'center';
Кінець шостого завдання


 