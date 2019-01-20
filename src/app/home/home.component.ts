import { Component, OnInit } from '@angular/core';
import { User } from './../datos/User';
import { USERS } from './../datos/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User: User[] =[];
  constructor() {
    this.User =  USERS;
  }

  ngOnInit() {
  }
  getUsers() {
    return this.User;
  }

  animales:Array<any> = [
    {tipo:"Perro", nombre:"Lisa", edad:10},
    {tipo:"Gato", nombre:"Pepe", edad:2},
    {tipo:"Pato", nombre:"Carlos", edad:7}
  ];

}
