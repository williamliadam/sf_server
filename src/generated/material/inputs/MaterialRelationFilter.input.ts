import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialWhereInput } from "../../material/inputs/MaterialWhereInput.input";

@NestJsGraphQL.InputType('MaterialRelationFilter', { isAbstract: true })
export class MaterialRelationFilter {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  is?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  isNot?: MaterialWhereInput | undefined;
}
