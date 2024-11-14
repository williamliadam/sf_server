"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["stars"] = "stars";
    PostScalarFieldEnum["published"] = "published";
    PostScalarFieldEnum["authorId"] = "authorId";
    PostScalarFieldEnum["createdAt"] = "createdAt";
    PostScalarFieldEnum["updatedAt"] = "updatedAt";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined });
//# sourceMappingURL=post-scalar-field.enum.js.map