import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { BodyDetail } from '../body-detail/body-detail.model';
import { Post } from '../post/post.model';
import { Recipe } from '../recipe/recipe.model';
import { MealTemplate } from '../meal-template/meal-template.model';
import { MealPlan } from '../meal-plan/meal-plan.model';
import { DishPlan } from '../dish-plan/dish-plan.model';
import { UserCount } from './user-count.output';
export declare class User {
    id: number;
    email: string | null;
    name: string | null;
    password: string;
    phone: string | null;
    wxId: string | null;
    createdAt: Date;
    updatedAt: Date;
    role: keyof typeof Role;
    profile?: Profile | null;
    bodyDetail?: BodyDetail | null;
    myPosts?: Array<Post>;
    myRecipes?: Array<Recipe>;
    myMealTemplates?: Array<MealTemplate>;
    myMealPlans?: Array<MealPlan>;
    chargeDishPlans?: Array<DishPlan>;
    _count?: UserCount;
}
