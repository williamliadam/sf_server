import { User } from '../user/user.model';
import { Ingredient } from '../ingredient/ingredient.model';
import { Method } from '../method/method.model';
import { DishPlan } from '../dish-plan/dish-plan.model';
import { DishTemplate } from '../dish-template/dish-template.model';
import { RecipeCount } from './recipe-count.output';
export declare class Recipe {
    id: number;
    name: string;
    stars: number;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    author?: User;
    ingredients?: Array<Ingredient>;
    methods?: Array<Method>;
    usedDishPlans?: Array<DishPlan>;
    usedDishTemplates?: Array<DishTemplate>;
    _count?: RecipeCount;
}
