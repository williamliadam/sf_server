"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
const class_transformer_1 = require("class-transformer");
const post_update_without_author_input_1 = require("./post-update-without-author.input");
let PostUpdateWithWhereUniqueWithoutAuthorInput = class PostUpdateWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_without_author_input_1.PostUpdateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => post_update_without_author_input_1.PostUpdateWithoutAuthorInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], PostUpdateWithWhereUniqueWithoutAuthorInput);
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = PostUpdateWithWhereUniqueWithoutAuthorInput;
//# sourceMappingURL=post-update-with-where-unique-without-author.input.js.map