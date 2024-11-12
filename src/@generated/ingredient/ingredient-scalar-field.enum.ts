import { registerEnumType } from '@nestjs/graphql';

export enum IngredientScalarFieldEnum {
    id = "id",
    materialId = "materialId",
    amount = "amount",
    materiaUnitId = "materiaUnitId",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(IngredientScalarFieldEnum, { name: 'IngredientScalarFieldEnum', description: undefined })
