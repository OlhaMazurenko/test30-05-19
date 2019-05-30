'use strict';

 document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('article-list');
  let l = new ArticleList(container);
  l.render();
  // let xhr = new XMLHttpRequest();
  // xhr.open('GET', ' http://my-json-server.typicode.com/mate-academy/literary-blog/articles ');
  // xhr.send();
  // xhr.onload =  function() {
  //   let data = JSON.parse(xhr.responseText);
  //   let list = new ArticleList(container);
  //   let oneArticle = new Article(element.title, element.author, element.text);
  //   for (let d of data) {
  //     list.addArticle(oneArticle);
  //   }
  //   list.render();
  // }
 });

 
