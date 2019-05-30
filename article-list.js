'use strict';
class ArticleList {
    constructor(container) {
      this.container = container;
      this.pList = [];
    }
   
    addArticle(article) {
      this.pList.push(article);
   
    }

    removeArticle(article) {
      this.pList.splice(this.article.indexOf(article), 1);
    }
   
    render() {
     //this.container.innerHtml = '';
     this.pList.forEach((element)=>{
        this.container.append(...`<article>
        <h1>${element.title}</h1>
        <p>${element.author}</p>
        <p>${element.text}</p>
        </article>`);
   });
  }
}


