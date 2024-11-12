import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileWhereInput } from "../../profile/inputs/ProfileWhereInput.input";

@NestJsGraphQL.InputType('ProfileRelationFilter', { isAbstract: true })
export class ProfileRelationFilter {
  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  is?: ProfileWhereInput | undefined;

  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  isNot?: ProfileWhereInput | undefined;
}
