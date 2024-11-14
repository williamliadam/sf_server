import { User } from '../user/user.model';
export declare class BodyDetail {
    id: number;
    weight: number | null;
    height: number | null;
    age: number | null;
    bmi: number | null;
    bmr: number | null;
    tdee: number | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
}
