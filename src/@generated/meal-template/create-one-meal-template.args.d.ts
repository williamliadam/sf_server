import { MealTemplateCreateInput } from './meal-template-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneMealTemplateArgs {
    data: MealTemplateCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
