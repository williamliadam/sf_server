import { User } from '../user/user.model';
import { DishTemplate } from '../dish-template/dish-template.model';
import { MealTemplateCount } from './meal-template-count.output';
export declare class MealTemplate {
    id: number;
    name: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    createBy?: User;
    dishTemplates?: Array<DishTemplate>;
    _count?: MealTemplateCount;
}
