import { Material } from '../material/material.model';
import { MateriaUnit } from '../materia-unit/materia-unit.model';
import { Recipe } from '../recipe/recipe.model';
export declare class Ingredient {
    id: number;
    materialId: number;
    amount: number;
    materiaUnitId: number;
    recipeId: number | null;
    createdAt: Date;
    updatedAt: Date;
    material?: Material;
    unit?: MateriaUnit;
    usedRecipe?: Recipe | null;
}
