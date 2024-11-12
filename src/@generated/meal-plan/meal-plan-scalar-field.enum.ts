import { registerEnumType } from '@nestjs/graphql';

export enum MealPlanScalarFieldEnum {
    id = "id",
    planTime = "planTime",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    type = "type"
}


registerEnumType(MealPlanScalarFieldEnum, { name: 'MealPlanScalarFieldEnum', description: undefined })
