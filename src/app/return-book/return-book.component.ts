import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  public modalRef: BsModalRef;
  private books = [];
  private returnInfo = [];

  constructor(private modalService: BsModalService, private categoriesService: CategoriesService) 
   {
     this.books = categoriesService.getAllBooksByName();
   }
  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  returnBook(info)
  {
    this.modalRef.hide(); //to hide the modal
    this.returnInfo.push(info);
    //console.log(info);
    //console.log(this.returnInfo);
  }
}
