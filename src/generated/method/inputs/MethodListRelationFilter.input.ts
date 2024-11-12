import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodWhereInput } from "../../method/inputs/MethodWhereInput.input";

@NestJsGraphQL.InputType('MethodListRelationFilter', { isAbstract: true })
export class MethodListRelationFilter {
  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  every?: MethodWhereInput | undefined;

  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  some?: MethodWhereInput | undefined;

  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  none?: MethodWhereInput | undefined;
}
