import { DishTemplateCreateInput } from './dish-template-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneDishTemplateArgs {
    data: DishTemplateCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
