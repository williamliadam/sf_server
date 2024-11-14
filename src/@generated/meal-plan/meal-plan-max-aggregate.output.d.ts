import { MealType } from '../prisma/meal-type.enum';
export declare class MealPlanMaxAggregate {
    id?: number;
    planTime?: Date | string;
    userId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
}
