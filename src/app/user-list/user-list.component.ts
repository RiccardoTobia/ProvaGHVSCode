import { Component, OnInit } from '@angular/core';
import { users, Utente } from 'src/models/utente.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // Lista utenti.
  listaUtenti: Utente[] = [];

  // Utente selezionato.
  selectedUser: Utente | undefined;

  constructor() { }

  ngOnInit(): void {
    // Valorizzo lista utenti (in app vera chiamerei un metodo rest).
    this.listaUtenti = users;
  }

  select(user:Utente){
    this.selectedUser = user;
  }
}
