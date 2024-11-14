"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBodyDetailArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_update_input_1 = require("./body-detail-update.input");
const class_transformer_1 = require("class-transformer");
const body_detail_where_unique_input_1 = require("./body-detail-where-unique.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpdateOneBodyDetailArgs = class UpdateOneBodyDetailArgs {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_update_input_1.BodyDetailUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => body_detail_update_input_1.BodyDetailUpdateInput)
], UpdateOneBodyDetailArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput)
], UpdateOneBodyDetailArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], UpdateOneBodyDetailArgs.prototype, "relationLoadStrategy", void 0);
UpdateOneBodyDetailArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneBodyDetailArgs);
exports.UpdateOneBodyDetailArgs = UpdateOneBodyDetailArgs;
//# sourceMappingURL=update-one-body-detail.args.js.map