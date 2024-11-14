import { MateriaCategory } from '../materia-category/materia-category.model';
import { NutritionRow } from '../nutrition-row/nutrition-row.model';
import { Ingredient } from '../ingredient/ingredient.model';
import { MaterialCount } from './material-count.output';
export declare class Material {
    id: number;
    name: string;
    code: string;
    nickName: string;
    materiaCategoryId: number;
    createdAt: Date;
    updatedAt: Date;
    category?: MateriaCategory;
    nutritionMatrix?: Array<NutritionRow>;
    ingredients?: Array<Ingredient>;
    _count?: MaterialCount;
}
