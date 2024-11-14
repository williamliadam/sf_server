import { MealType } from '../prisma/meal-type.enum';
export declare class MealPlanCreateManyCreateByInput {
    id?: number;
    planTime?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
}
