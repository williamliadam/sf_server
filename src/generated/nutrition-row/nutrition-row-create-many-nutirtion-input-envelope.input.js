"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowCreateManyNutirtionInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_create_many_nutirtion_input_1 = require("./nutrition-row-create-many-nutirtion.input");
const class_transformer_1 = require("class-transformer");
let NutritionRowCreateManyNutirtionInputEnvelope = class NutritionRowCreateManyNutirtionInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_many_nutirtion_input_1.NutritionRowCreateManyNutirtionInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_many_nutirtion_input_1.NutritionRowCreateManyNutirtionInput)
], NutritionRowCreateManyNutirtionInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], NutritionRowCreateManyNutirtionInputEnvelope.prototype, "skipDuplicates", void 0);
NutritionRowCreateManyNutirtionInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowCreateManyNutirtionInputEnvelope);
exports.NutritionRowCreateManyNutirtionInputEnvelope = NutritionRowCreateManyNutirtionInputEnvelope;
//# sourceMappingURL=nutrition-row-create-many-nutirtion-input-envelope.input.js.map