import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // Questo si chiama mocking dei dati, assegno dati per provare la app.
  roles = ['admin', 'moderator', 'guest'];

  model = new User(1, 'admin', 'admin', this.roles[0]);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // In app vera chiamerei backend con rest
    console.log('Salvo user '+JSON.stringify(this.model));
  }

  newUser(){
    this.model = new User(2, '', '');
  }

}
