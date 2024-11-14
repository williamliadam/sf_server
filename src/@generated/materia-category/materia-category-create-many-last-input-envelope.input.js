"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateManyLastInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_many_last_input_1 = require("./materia-category-create-many-last.input");
const class_transformer_1 = require("class-transformer");
let MateriaCategoryCreateManyLastInputEnvelope = class MateriaCategoryCreateManyLastInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [materia_category_create_many_last_input_1.MateriaCategoryCreateManyLastInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_create_many_last_input_1.MateriaCategoryCreateManyLastInput)
], MateriaCategoryCreateManyLastInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryCreateManyLastInputEnvelope.prototype, "skipDuplicates", void 0);
MateriaCategoryCreateManyLastInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateManyLastInputEnvelope);
exports.MateriaCategoryCreateManyLastInputEnvelope = MateriaCategoryCreateManyLastInputEnvelope;
//# sourceMappingURL=materia-category-create-many-last-input-envelope.input.js.map