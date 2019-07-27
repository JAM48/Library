import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories = 
  [
    {
      "id": 1,
      "name": "Engineering",
      "books": [
        {
          "id": 101,
          "name": "Introduction to Algorithms",
          "author": "Thomas H. Cormen"
        },
        {
          "id": 102,
          "name": "Clean Code",
          "author": "Robert Cecil Martin"
        },
        {
          "id": 103,
          "name": "The Design of Everything",
          "author": "Don Norman"
        },
        {
          "id": 104,
          "name": "To Engineer is Human",
          "author": "Henry Petroski"
            
        },
        {
          "id": 105,
          "name": "Advanced Engineering Mathematics",
          "author": "Erwin Kreys"    
        }
      ]    
    },
    {
      "id": 2,
      "name": "Science",
      "books":  [
        {
          "id": 201,
          "name": "A Brief History of Time",
          "author": "Stephen Hawking"
        },
        {
          "id": 202,
          "name": "The Selfish Gene",
          "author": "Richard Dawkings"
        },
        {
          "id": 203,
          "name": "Silent Spring",
          "author": "Rechel Carson"
        },
        {
          "id": 204,
          "name": "The Blind Watchmaker",
          "author": "Richard Dawkings"
            
        },
        {
          "id": 205,
          "name": "Bad Science",
          "author": "Ben Goldacre"    
        }
      ]
    },
    {
      "id": 3,
      "name": "Language",
      "books":  [
        {
          "id": 301,
          "name": "The Language Instinct",
          "author": "Steven Pinker"
        },
        {
          "id": 302,
          "name": "Eats, Shoots & Leaves",
          "author": "Lynne Truss"
        },
        {
          "id": 303,
          "name": "Through the Language Glass",
          "author": "Guy Deutscher"
        },
        {
          "id": 304,
          "name": "Word by Word",
          "author": "Kory Stamper"
            
        }
      ]
    },
    {
      "id": 4,
      "name": "Arts",
      "books":  [
        {
          "id": 401,
          "name": "The Artist's Way",
          "author": "Julia Cameron"
        },
        {
          "id": 402,
          "name": "Ways of Seeing",
          "author": "John Berger"
        },
        {
          "id": 403,
          "name": "Drawing on the Right Side of the Brain",
          "author": "Betty Edwards"
        },
        {
          "id": 404,
          "name": "Cover to Cover",
          "author": "Rob Perree"
            
        }
      ]
    }
  ]; 

  private books = [];

  constructor() { }

  getCategories()
  {
    //here http request to backend to get categories
    return this.categories;
  }

  getBooks(categoryName)
  {
    return this.categories.find(c => c.name === categoryName).books;
  }
  
  getAllBooksByName()
  {
    this.categories.forEach( cat => cat.books.forEach( book => this.books.push(book.name)))
    return this.books;
  }
}
