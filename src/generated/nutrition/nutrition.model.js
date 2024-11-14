"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nutrition = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_model_1 = require("../nutrition-row/nutrition-row.model");
const nutrition_count_output_1 = require("./nutrition-count.output");
let Nutrition = class Nutrition {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Nutrition.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Nutrition.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Nutrition.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Nutrition.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Nutrition.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_model_1.NutritionRow], { nullable: true })
], Nutrition.prototype, "usedRow", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_count_output_1.NutritionCount, { nullable: false })
], Nutrition.prototype, "_count", void 0);
Nutrition = __decorate([
    (0, graphql_2.ObjectType)()
], Nutrition);
exports.Nutrition = Nutrition;
//# sourceMappingURL=nutrition.model.js.map