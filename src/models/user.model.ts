
export class User {
    // ? indica che campo non necessario(?)
    constructor(
        public id: number,
        public username:string,
        public password: string,
        public role?: string
    ){}
}