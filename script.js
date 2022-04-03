"use strict"
// Ваша HTML страничка будет иметь следующую структуру:
// <ul id="albums"></ul>
// Необходимо сделать следующие действия:
// 1. Отправить запрос в АПИ и получить результат - https://jsonplaceholder.typicode.com/albums
// 2. Как только пришел ответ необходимо сформировать список (тег li) всех заголовков (поле title). Все элементы должны находится внутри списка с ID="albums"
// 3. Добавить класс "album_title" каждому новому элементу <li>
// Ожидаемой результат в HTML:
// <ul id="albums">
//   <li class="album_title">quidem molestiae enim</li>
//   <li class="album_title">sunt qui excepturi placeat culpa</li>
//   <li class="album_title">omnis laborum odio</li>
//   ...
// </ul>
// P.S. Можете стилизовать (используя CSS) ваш список по вашему желанию и фантазии


const fillAlbumsList = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw response;
    } else {
        let array = await response.json();
        array.forEach(element => {document.querySelector(`#albums`).innerHTML += `<li class="album_title">${element.title}</li>`});
      }
  } catch (responseError) {
    if (responseError.status === 404) {
      console.log("URL not found");
    } else {
      console.error(error);
    }
  }
}

let url = "https://jsonplaceholder.typicode.com/albums";
document.querySelector(`body`).innerHTML +=
    `<style>
    .album_title::first-letter{
        text-transform: uppercase;
        }
      </style>
    <p>ALBUMS:</p>
    <ol id="albums"></ol>`;


fillAlbumsList(url);
