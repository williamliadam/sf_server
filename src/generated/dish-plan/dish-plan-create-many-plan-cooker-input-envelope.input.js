"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateManyPlanCookerInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_many_plan_cooker_input_1 = require("./dish-plan-create-many-plan-cooker.input");
const class_transformer_1 = require("class-transformer");
let DishPlanCreateManyPlanCookerInputEnvelope = class DishPlanCreateManyPlanCookerInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_many_plan_cooker_input_1.DishPlanCreateManyPlanCookerInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_plan_cooker_input_1.DishPlanCreateManyPlanCookerInput)
], DishPlanCreateManyPlanCookerInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], DishPlanCreateManyPlanCookerInputEnvelope.prototype, "skipDuplicates", void 0);
DishPlanCreateManyPlanCookerInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateManyPlanCookerInputEnvelope);
exports.DishPlanCreateManyPlanCookerInputEnvelope = DishPlanCreateManyPlanCookerInputEnvelope;
//# sourceMappingURL=dish-plan-create-many-plan-cooker-input-envelope.input.js.map