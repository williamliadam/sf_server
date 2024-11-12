import * as NestJsGraphQL from "@nestjs/graphql";
import { Role } from "../../enums/Role.enum";
import { NestedEnumRoleFilter } from "./NestedEnumRoleFilter.input";

@NestJsGraphQL.InputType('EnumRoleFilter', { isAbstract: true })
export class EnumRoleFilter {
  @NestJsGraphQL.Field(() => Role, { nullable: true })
  equals?: "USER" | "ADMIN" | undefined;

  @NestJsGraphQL.Field(() => [Role], { nullable: true })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @NestJsGraphQL.Field(() => [Role], { nullable: true })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleFilter, { nullable: true })
  not?: NestedEnumRoleFilter | undefined;
}
