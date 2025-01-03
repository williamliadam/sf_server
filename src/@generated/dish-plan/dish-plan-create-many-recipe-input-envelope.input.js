"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateManyRecipeInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_many_recipe_input_1 = require("./dish-plan-create-many-recipe.input");
const class_transformer_1 = require("class-transformer");
let DishPlanCreateManyRecipeInputEnvelope = class DishPlanCreateManyRecipeInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_many_recipe_input_1.DishPlanCreateManyRecipeInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_recipe_input_1.DishPlanCreateManyRecipeInput)
], DishPlanCreateManyRecipeInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DishPlanCreateManyRecipeInputEnvelope.prototype, "skipDuplicates", void 0);
DishPlanCreateManyRecipeInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateManyRecipeInputEnvelope);
exports.DishPlanCreateManyRecipeInputEnvelope = DishPlanCreateManyRecipeInputEnvelope;
//# sourceMappingURL=dish-plan-create-many-recipe-input-envelope.input.js.map