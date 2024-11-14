"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMethodArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_where_unique_input_1 = require("./method-where-unique.input");
const class_transformer_1 = require("class-transformer");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindUniqueMethodArgs = class FindUniqueMethodArgs {
};
__decorate([
    (0, graphql_1.Field)(() => method_where_unique_input_1.MethodWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], FindUniqueMethodArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindUniqueMethodArgs.prototype, "relationLoadStrategy", void 0);
FindUniqueMethodArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueMethodArgs);
exports.FindUniqueMethodArgs = FindUniqueMethodArgs;
//# sourceMappingURL=find-unique-method.args.js.map