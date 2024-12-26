"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyClientArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_update_many_mutation_input_1 = require("./client-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const client_where_input_1 = require("./client-where.input");
let UpdateManyClientArgs = class UpdateManyClientArgs {
};
__decorate([
    (0, graphql_1.Field)(() => client_update_many_mutation_input_1.ClientUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => client_update_many_mutation_input_1.ClientUpdateManyMutationInput)
], UpdateManyClientArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_where_input_1.ClientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => client_where_input_1.ClientWhereInput)
], UpdateManyClientArgs.prototype, "where", void 0);
UpdateManyClientArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyClientArgs);
exports.UpdateManyClientArgs = UpdateManyClientArgs;
//# sourceMappingURL=update-many-client.args.js.map