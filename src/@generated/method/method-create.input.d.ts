import { RecipeCreateNestedOneWithoutMethodsInput } from '../recipe/recipe-create-nested-one-without-methods.input';
export declare class MethodCreateInput {
    code: string;
    name: string;
    desc: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    usedRecipe?: RecipeCreateNestedOneWithoutMethodsInput;
}
