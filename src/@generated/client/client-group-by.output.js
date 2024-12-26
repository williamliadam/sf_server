"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const client_count_aggregate_output_1 = require("./client-count-aggregate.output");
const client_avg_aggregate_output_1 = require("./client-avg-aggregate.output");
const client_sum_aggregate_output_1 = require("./client-sum-aggregate.output");
const client_min_aggregate_output_1 = require("./client-min-aggregate.output");
const client_max_aggregate_output_1 = require("./client-max-aggregate.output");
let ClientGroupBy = class ClientGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientGroupBy.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ClientGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ClientGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_count_aggregate_output_1.ClientCountAggregate, { nullable: true })
], ClientGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_avg_aggregate_output_1.ClientAvgAggregate, { nullable: true })
], ClientGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_sum_aggregate_output_1.ClientSumAggregate, { nullable: true })
], ClientGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_min_aggregate_output_1.ClientMinAggregate, { nullable: true })
], ClientGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_max_aggregate_output_1.ClientMaxAggregate, { nullable: true })
], ClientGroupBy.prototype, "_max", void 0);
ClientGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ClientGroupBy);
exports.ClientGroupBy = ClientGroupBy;
//# sourceMappingURL=client-group-by.output.js.map