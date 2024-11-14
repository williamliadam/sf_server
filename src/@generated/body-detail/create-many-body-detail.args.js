"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBodyDetailArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_create_many_input_1 = require("./body-detail-create-many.input");
const class_transformer_1 = require("class-transformer");
let CreateManyBodyDetailArgs = class CreateManyBodyDetailArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [body_detail_create_many_input_1.BodyDetailCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => body_detail_create_many_input_1.BodyDetailCreateManyInput)
], CreateManyBodyDetailArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyBodyDetailArgs.prototype, "skipDuplicates", void 0);
CreateManyBodyDetailArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyBodyDetailArgs);
exports.CreateManyBodyDetailArgs = CreateManyBodyDetailArgs;
//# sourceMappingURL=create-many-body-detail.args.js.map