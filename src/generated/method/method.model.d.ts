import { Recipe } from '../recipe/recipe.model';
export declare class Method {
    id: number;
    code: string;
    name: string;
    desc: string;
    recipeId: number | null;
    createdAt: Date;
    updatedAt: Date;
    usedRecipe?: Recipe | null;
}
