import { Actualite } from './actualite';

export class Comment {
    _id: string;
    contenu: string;
    date_creation: Date;
    actualite: Actualite;
}
