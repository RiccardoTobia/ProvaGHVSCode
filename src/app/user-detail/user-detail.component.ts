import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ruoli, Utente } from 'src/models/utente.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {
  // Input indica che della valorizzazione di quello sotto se ne occupa qualcun altro.
  @Input()
  currentUser!: Utente;

  listaRuoli = ruoli;

  // L'oggetto che sarà il form mostrato in html
  userForm!: FormGroup

  // In angular la dependency injection è fatta in costruttore.
  // Tutto quello che viene dichiarato negli argomenti deve
  // essere iniettabile, in modo che quando viene costruita la 
  // classe ts ci vengano fornite anche le istanze che abbiamo
  // richiesto.
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.reset();
    this.userForm.setValue({
      name: this.currentUser?.username,
      role: this.currentUser?.id
    });
  }

  ngOnInit(): void {
  }


  onClickSave() {
    this.currentUser = this.prepareUserForSave();
    // Di nuovo, in app vera chiamerei metodo che salva lo user.
    console.log('user salvato ',JSON.stringify(this.currentUser));
  }

  prepareUserForSave() : Utente {
    const formModel = this.userForm.value;

    let idRole=0;
    if(formModel.role != ''){
      idRole = Number(formModel.role);
    }

    const userForSave: Utente = {
      id: this.currentUser.id,
      username: formModel.name,
      role: this.listaRuoli.find(x => x.id === idRole)
    };
    return userForSave;
  }

  // Metodo che permette al formbuilder di creare una form
  createForm(){
    this.userForm = this.fb.group({
      name:['', Validators.required],
      role: new FormControl()
    });
  }

}
