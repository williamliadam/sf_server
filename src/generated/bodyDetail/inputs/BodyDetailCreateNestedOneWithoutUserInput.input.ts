import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailCreateOrConnectWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailCreateOrConnectWithoutUserInput.input";
import { BodyDetailCreateWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailCreateWithoutUserInput.input";
import { BodyDetailWhereUniqueInput } from "../../bodyDetail/inputs/BodyDetailWhereUniqueInput.input";

@NestJsGraphQL.InputType('BodyDetailCreateNestedOneWithoutUserInput', { isAbstract: true })
export class BodyDetailCreateNestedOneWithoutUserInput {
  @NestJsGraphQL.Field(() => BodyDetailCreateWithoutUserInput, { nullable: true })
  create?: BodyDetailCreateWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: BodyDetailCreateOrConnectWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput, { nullable: true })
  connect?: BodyDetailWhereUniqueInput | undefined;
}
