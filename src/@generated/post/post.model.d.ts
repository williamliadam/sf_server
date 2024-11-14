import { User } from '../user/user.model';
export declare class Post {
    id: number;
    title: string;
    content: string | null;
    stars: number | null;
    published: boolean | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
    author?: User | null;
}
