import { Comment } from 'src/app/models/comment';
export class Article {
    id: string;
    title: string;
    contenu: string;
    nbVisiteurs: number;
    image: string;
    createdAt: Date;
    updateAt: Date;
    category: string;
    user: string;
    comments: Comment[];
}
