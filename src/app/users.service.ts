import { Injectable } from '@angular/core';
import { User } from './datos/User';
import { USERS } from './datos/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  User: User[] =[];
  constructor() {
    this.User =  USERS;
   }

   getUsers() {
     return this.User;
   }
}
