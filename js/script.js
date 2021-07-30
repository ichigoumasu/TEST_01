"use strict";

const name2 = prompt('Привет! Как твое имя?', ''),
age = +prompt('А сколько лет?', ''),
work = confirm('Ты работаешь?');

console.log(`Вы ответили, что Вас зовут ${name2},
 вам лет ${age} и вы работаете:${work}`);
console.log(`А через 10 лет вам будет: ${age+10}`);