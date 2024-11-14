"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanMinAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let DishPlanMinAggregate = class DishPlanMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanMinAggregate.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanMinAggregate.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanMinAggregate.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanMinAggregate.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanMinAggregate.prototype, "updatedAt", void 0);
DishPlanMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], DishPlanMinAggregate);
exports.DishPlanMinAggregate = DishPlanMinAggregate;
//# sourceMappingURL=dish-plan-min-aggregate.output.js.map