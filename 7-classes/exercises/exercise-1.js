"use strict";
//Your code does here

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.#pages = pages;
    this.copiesSold = 0;
  }

  get pages() {
    return this._pages;
  }

  // private
  set #pages(value) {
    this._pages = value;
  }

  get copiesSold() {
    return this._copiesSold;
  }

  set copiesSold(value) {
    if (value < 0) {
      throw new Error("Value can't be negative");
    }
    this._copiesSold = value;
  }
}

const book = new Book("Who Moved My Cheese?", "Spencer Johnson", 96);
console.log(book.title); //Who Moved My Cheese
console.log(book.pages); //96
try {
  book.pages = 96;
} catch (ex) {
  console.log(ex.message);
  //Cannot set property pages of #<Book> which has only a getter
}
console.log(book.copiesSold); //0
book.copiesSold = 1;
console.log(book.copiesSold); //1
try {
  book.copiesSold = -2;
} catch (ex) {
  console.log(ex.message); //Value can't be negative
}
console.log(book.copiesSold); //1
