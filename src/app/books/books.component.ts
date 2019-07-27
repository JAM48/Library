import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../categories.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private currentCategory;
  private books;
  public modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService, 
              private categoriesService: CategoriesService,
              private usersService: UsersService) 
  {
    this.currentCategory = localStorage.getItem('currentCategory');
    //console.log(this.currentCategory)
    this.books = categoriesService.getBooks(this.currentCategory);
    //console.log(this.books);
   }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

  borrow(bookId,userInfo)
  {
    this.modalRef.hide(); //to hide the modal

    // console.log(bookId,userInfo);
    // console.log(this.books.find(b => b.id === bookId));

    // this.user = userInfo;
    // this.user.borrowedBook = this.books.find(b => b.id === bookId);
    this.usersService.addUser(userInfo, this.books.find(b => b.id === bookId));
  }

}
