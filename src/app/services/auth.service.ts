import { Injectable } from '@angular/core';
import { User } from '../users/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn: boolean = false;

 
  role: string = "";

  constructor() { }

  storeUserInfo(user: User): void{
    sessionStorage.setItem("employee", JSON.stringify(user));
  }

  retreiveUserInfo(): void{
      let userData: any = sessionStorage.getItem("employee");
      if(userData!=null){
        return JSON.parse(userData);
      }
  }

  removeUserInfo(): void{
    sessionStorage.removeItem("employee");
  }
}
