import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailCreateWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailCreateWithoutUserInput.input";
import { BodyDetailUpdateWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailUpdateWithoutUserInput.input";

@NestJsGraphQL.InputType('BodyDetailUpsertWithoutUserInput', { isAbstract: true })
export class BodyDetailUpsertWithoutUserInput {
  @NestJsGraphQL.Field(() => BodyDetailUpdateWithoutUserInput)
  update!: BodyDetailUpdateWithoutUserInput;

  @NestJsGraphQL.Field(() => BodyDetailCreateWithoutUserInput)
  create!: BodyDetailCreateWithoutUserInput;
}
