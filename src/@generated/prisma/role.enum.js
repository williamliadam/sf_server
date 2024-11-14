"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
(0, graphql_1.registerEnumType)(Role, { name: 'Role', description: undefined });
//# sourceMappingURL=role.enum.js.map