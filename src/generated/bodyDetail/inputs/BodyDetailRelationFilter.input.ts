import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailWhereInput } from "../../bodyDetail/inputs/BodyDetailWhereInput.input";

@NestJsGraphQL.InputType('BodyDetailRelationFilter', { isAbstract: true })
export class BodyDetailRelationFilter {
  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  is?: BodyDetailWhereInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  isNot?: BodyDetailWhereInput | undefined;
}
