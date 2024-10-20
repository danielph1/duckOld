import fs from 'fs';

let user = class player{
    constructor(name, numberTel, status, title){
        this.name = name;
        this.numberTel = numberTel;
        this.status = status;
        this.title = title;
    }
}

let ground = new user('daniel', '+5521999999999', 'online', 'Deus proverá!');
let groundT = JSON.stringify(ground)
fs.writeFileSync('./teste.json', (groundT, null, 2), 'utf-8');