"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodCreateManyUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let MethodCreateManyUsedRecipeInput = class MethodCreateManyUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MethodCreateManyUsedRecipeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodCreateManyUsedRecipeInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodCreateManyUsedRecipeInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodCreateManyUsedRecipeInput.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MethodCreateManyUsedRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MethodCreateManyUsedRecipeInput.prototype, "updatedAt", void 0);
MethodCreateManyUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], MethodCreateManyUsedRecipeInput);
exports.MethodCreateManyUsedRecipeInput = MethodCreateManyUsedRecipeInput;
//# sourceMappingURL=method-create-many-used-recipe.input.js.map