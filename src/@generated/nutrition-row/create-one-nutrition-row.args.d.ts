import { NutritionRowCreateInput } from './nutrition-row-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneNutritionRowArgs {
    data: NutritionRowCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
