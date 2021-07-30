/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieOne = prompt("Один из последних просмотренных фильмов?");
const movieTwo = prompt("Другой из последних просмотренных фильмов?");
const rateMovieOne = +prompt(`${movieOne} На сколько оцените его?`);
const rateMovieTwo = +prompt(`${movieTwo} На сколько оцените его?`);

let movies = {
    nameMovieOne: movieOne,
    nameMovieTwo: movieTwo,
    rateOne: rateMovieOne,
    rateTwo: rateMovieTwo
};

console.log(`${movies.nameMovieOne}: ${movies.rateOne}`);
console.log(`${movies.nameMovieTwo}: ${movies.rateTwo}`);
