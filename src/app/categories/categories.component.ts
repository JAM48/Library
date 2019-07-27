import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories;
  //private category;
  //private x;
  //private cat;

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    //console.log(this.categories);
  }

  rout(catName)
  {
    //this.x = 'home'
   // this.category = catName.toString().toLowerCase()+'Books';
    //this.category = catName;
    
    // localStorage.setItem('currentCategory', this.category);
    localStorage.setItem('currentCategory', catName);
    //console.log('currentCategory:' + localStorage.getItem('currentCategory'));

    //console.log(this.category);
    this.router.navigate(['books']);
    //this.router.navigate(['/'+this.x]);
  }
}
