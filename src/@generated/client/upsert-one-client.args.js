"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneClientArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_where_unique_input_1 = require("./client-where-unique.input");
const class_transformer_1 = require("class-transformer");
const client_create_input_1 = require("./client-create.input");
const client_update_input_1 = require("./client-update.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpsertOneClientArgs = class UpsertOneClientArgs {
};
__decorate([
    (0, graphql_1.Field)(() => client_where_unique_input_1.ClientWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => client_where_unique_input_1.ClientWhereUniqueInput)
], UpsertOneClientArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_create_input_1.ClientCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => client_create_input_1.ClientCreateInput)
], UpsertOneClientArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_update_input_1.ClientUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => client_update_input_1.ClientUpdateInput)
], UpsertOneClientArgs.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], UpsertOneClientArgs.prototype, "relationLoadStrategy", void 0);
UpsertOneClientArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneClientArgs);
exports.UpsertOneClientArgs = UpsertOneClientArgs;
//# sourceMappingURL=upsert-one-client.args.js.map