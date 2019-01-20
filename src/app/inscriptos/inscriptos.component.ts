import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from './../datos/User';
//import { USERS } from './../datos/data';

@Component({
  selector: 'app-inscriptos',
  templateUrl: './inscriptos.component.html',
  styleUrls: ['./inscriptos.component.css']
})
export class InscriptosComponent implements OnInit {

  User: User[] =[];
  constructor(private UsersService:UsersService) {
    this.User = UsersService.getUsers();
  }

  ngOnInit() {
  }

}
