import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [];

  constructor() { }

  addUser(user,book)
  {
    // user.userId = (Math.ceil(1000000*Math.random())) + 
    //               (String.fromCharCode(Math.ceil(100*Math.random()),
    //                                    Math.ceil(100*Math.random()),
    //                                    Math.ceil(100*Math.random())))

    if(! this.userExists(user.userEmail))
     { 
       console.log("user doesn't Exist");
       user.borrowedBook = [];
       user.borrowedBook.push(book);
       this.users.push(user);  
     }

     else
       {
        console.log("user already Exists");
        this.users.find(u => u.userEmail === user.userEmail).borrowedBook.push(book);
       }

    console.log(this.users);
  }

  userExists(userEmail)
  {
    return this.users.find(u => u.userEmail === userEmail);
  }

}
