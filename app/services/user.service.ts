import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser : User;

  
  geLoggedUser() : Observable<User> {
    
    if(!this.loggedUser)
    {
      if(sessionStorage.getItem("loggedUser") !== null){
        this.loggedUser=JSON.parse(sessionStorage.getItem("loggedUser"));
        console.log(this.loggedUser.name);
        console.log(sessionStorage);
      }
     
    }
    return of(this.loggedUser);
  }
  setLoggedUser() : void {
    this.loggedUser=new User();
    this.loggedUser.name = "steva";
    sessionStorage.setItem("loggedUser",JSON.stringify(this.loggedUser));
  }

  constructor() { }
}