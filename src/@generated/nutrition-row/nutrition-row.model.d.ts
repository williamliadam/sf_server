import { Nutrition } from '../nutrition/nutrition.model';
import { Material } from '../material/material.model';
export declare class NutritionRow {
    id: number;
    nutirtionId: number;
    percent: number;
    belongToId: number;
    createdAt: Date;
    updatedAt: Date;
    nutirtion?: Nutrition;
    belongMaterial?: Material;
}
