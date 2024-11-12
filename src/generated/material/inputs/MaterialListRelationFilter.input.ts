import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialWhereInput } from "../../material/inputs/MaterialWhereInput.input";

@NestJsGraphQL.InputType('MaterialListRelationFilter', { isAbstract: true })
export class MaterialListRelationFilter {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  every?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  some?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  none?: MaterialWhereInput | undefined;
}
