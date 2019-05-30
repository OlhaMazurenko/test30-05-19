
class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }
  matches(query) {
   return ((this.title).includes(query) || (this.text).includes(query) || (this.author).includes(query))
    ? true 
    : false;
  }
}

class ArticleList {
  constructor(container) {
    this.container = container;
  }

  addArticle(article) {
    this.container.appendChild(article);

  }
  removeArticle(article) {
    this.container.remove(article);

  }

  render(myTitle, myAuthor, myText) {
    this.container.innerHTML = '';
    this.container.innerHTML += `<div><h1>${myTitle}</h1><p>Autor: ${myAuthor}</p> <p>${myText}</p></div> `;
  }
}


