import { MealType } from '../prisma/meal-type.enum';
import { DishPlan } from '../dish-plan/dish-plan.model';
import { User } from '../user/user.model';
import { MealPlanCount } from './meal-plan-count.output';
export declare class MealPlan {
    id: number;
    planTime: Date | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    type: keyof typeof MealType;
    dishPlans?: Array<DishPlan>;
    createBy?: User;
    _count?: MealPlanCount;
}
