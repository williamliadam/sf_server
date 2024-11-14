"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRow = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const nutrition_model_1 = require("../nutrition/nutrition.model");
const material_model_1 = require("../material/material.model");
let NutritionRow = class NutritionRow {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], NutritionRow.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], NutritionRow.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], NutritionRow.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], NutritionRow.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], NutritionRow.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], NutritionRow.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_model_1.Nutrition, { nullable: false })
], NutritionRow.prototype, "nutirtion", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_model_1.Material, { nullable: false })
], NutritionRow.prototype, "belongMaterial", void 0);
NutritionRow = __decorate([
    (0, graphql_2.ObjectType)()
], NutritionRow);
exports.NutritionRow = NutritionRow;
//# sourceMappingURL=nutrition-row.model.js.map