export class Utente {
    id = 0;
    username='';
    role: Ruolo | undefined;
}

export class Ruolo {
    id=0;
    descrizione='';
}

export const ruoli: Ruolo[]=[
    {id:1, descrizione:'admin'},
    {id:2, descrizione:'moderator'},
    {id:3, descrizione:'guest'}
]

export const users: Utente[] = [
    {id: 1, username: 'SignorRappresentante', role: ruoli[1]},
    {id: 2, username: 'LaFigliaDelPanettiere', role: ruoli[2]},
    {id: 3, username: 'Straccivendolo', role: ruoli[3]}
]