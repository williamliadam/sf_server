"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMaterialArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_update_input_1 = require("./material-update.input");
const class_transformer_1 = require("class-transformer");
const material_where_unique_input_1 = require("./material-where-unique.input");
let UpdateOneMaterialArgs = class UpdateOneMaterialArgs {
};
__decorate([
    (0, graphql_1.Field)(() => material_update_input_1.MaterialUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_update_input_1.MaterialUpdateInput)
], UpdateOneMaterialArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], UpdateOneMaterialArgs.prototype, "where", void 0);
UpdateOneMaterialArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneMaterialArgs);
exports.UpdateOneMaterialArgs = UpdateOneMaterialArgs;
//# sourceMappingURL=update-one-material.args.js.map