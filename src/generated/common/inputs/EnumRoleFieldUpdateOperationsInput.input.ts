import * as NestJsGraphQL from "@nestjs/graphql";
import { Role } from "../../enums/Role.enum";

@NestJsGraphQL.InputType('EnumRoleFieldUpdateOperationsInput', { isAbstract: true })
export class EnumRoleFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Role, { nullable: true })
  set?: "USER" | "ADMIN" | undefined;
}
