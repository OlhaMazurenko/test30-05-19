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
        <h1>${element}</h1>
        <p>${element}</p>
        <p>${element}</p>
        </article>`);
   });
  }
}


