"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ProfileScalarFieldEnum;
(function (ProfileScalarFieldEnum) {
    ProfileScalarFieldEnum["id"] = "id";
    ProfileScalarFieldEnum["avatar"] = "avatar";
    ProfileScalarFieldEnum["nickName"] = "nickName";
    ProfileScalarFieldEnum["userId"] = "userId";
    ProfileScalarFieldEnum["createdAt"] = "createdAt";
    ProfileScalarFieldEnum["updatedAt"] = "updatedAt";
    ProfileScalarFieldEnum["goal"] = "goal";
})(ProfileScalarFieldEnum = exports.ProfileScalarFieldEnum || (exports.ProfileScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined });
//# sourceMappingURL=profile-scalar-field.enum.js.map