"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailNullableRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_where_input_1 = require("./body-detail-where.input");
let BodyDetailNullableRelationFilter = class BodyDetailNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true })
], BodyDetailNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true })
], BodyDetailNullableRelationFilter.prototype, "isNot", void 0);
BodyDetailNullableRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailNullableRelationFilter);
exports.BodyDetailNullableRelationFilter = BodyDetailNullableRelationFilter;
//# sourceMappingURL=body-detail-nullable-relation-filter.input.js.map