import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';
import { MealPlanCreateOrConnectWithoutDishPlansInput } from './meal-plan-create-or-connect-without-dish-plans.input';
import { MealPlanUpsertWithoutDishPlansInput } from './meal-plan-upsert-without-dish-plans.input';
import { MealPlanWhereInput } from './meal-plan-where.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateToOneWithWhereWithoutDishPlansInput } from './meal-plan-update-to-one-with-where-without-dish-plans.input';
export declare class MealPlanUpdateOneWithoutDishPlansNestedInput {
    create?: MealPlanCreateWithoutDishPlansInput;
    connectOrCreate?: MealPlanCreateOrConnectWithoutDishPlansInput;
    upsert?: MealPlanUpsertWithoutDishPlansInput;
    disconnect?: MealPlanWhereInput;
    delete?: MealPlanWhereInput;
    connect?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    update?: MealPlanUpdateToOneWithWhereWithoutDishPlansInput;
}
