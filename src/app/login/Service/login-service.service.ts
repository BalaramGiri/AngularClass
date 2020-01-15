import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn = false;
isAdmin = false;
  constructor() { }

logIn(userName:string,passWord:string){
  if (userName === 'Admin' && passWord === 'Admin') {
    this.isLoggedIn = true;
    this.isAdmin = true;
  }

  if (userName === 'user' && passWord === 'user') {
    this.isLoggedIn = true;
    this.isAdmin = false;
  }
  return this.isLoggedIn;
}


}
