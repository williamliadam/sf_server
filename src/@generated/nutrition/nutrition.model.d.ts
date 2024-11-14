import { NutritionRow } from '../nutrition-row/nutrition-row.model';
import { NutritionCount } from './nutrition-count.output';
export declare class Nutrition {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    usedRow?: Array<NutritionRow>;
    _count?: NutritionCount;
}
