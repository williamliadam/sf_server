import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailCreateWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailCreateWithoutUserInput.input";
import { BodyDetailWhereUniqueInput } from "../../bodyDetail/inputs/BodyDetailWhereUniqueInput.input";

@NestJsGraphQL.InputType('BodyDetailCreateOrConnectWithoutUserInput', { isAbstract: true })
export class BodyDetailCreateOrConnectWithoutUserInput {
  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput)
  where!: BodyDetailWhereUniqueInput;

  @NestJsGraphQL.Field(() => BodyDetailCreateWithoutUserInput)
  create!: BodyDetailCreateWithoutUserInput;
}
