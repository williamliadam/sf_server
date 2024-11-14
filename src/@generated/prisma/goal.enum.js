"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
const graphql_1 = require("@nestjs/graphql");
var Goal;
(function (Goal) {
    Goal["KEEP"] = "KEEP";
    Goal["BULKING"] = "BULKING";
    Goal["SLIMING"] = "SLIMING";
})(Goal = exports.Goal || (exports.Goal = {}));
(0, graphql_1.registerEnumType)(Goal, { name: 'Goal', description: undefined });
//# sourceMappingURL=goal.enum.js.map