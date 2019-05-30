'use strict';

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