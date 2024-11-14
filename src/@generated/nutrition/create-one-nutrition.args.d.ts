import { NutritionCreateInput } from './nutrition-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneNutritionArgs {
    data: NutritionCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
