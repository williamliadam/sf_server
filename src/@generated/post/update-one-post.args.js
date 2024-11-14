"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_update_input_1 = require("./post-update.input");
const class_transformer_1 = require("class-transformer");
const post_where_unique_input_1 = require("./post-where-unique.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpdateOnePostArgs = class UpdateOnePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => post_update_input_1.PostUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_update_input_1.PostUpdateInput)
], UpdateOnePostArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput)
], UpdateOnePostArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], UpdateOnePostArgs.prototype, "relationLoadStrategy", void 0);
UpdateOnePostArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOnePostArgs);
exports.UpdateOnePostArgs = UpdateOnePostArgs;
//# sourceMappingURL=update-one-post.args.js.map