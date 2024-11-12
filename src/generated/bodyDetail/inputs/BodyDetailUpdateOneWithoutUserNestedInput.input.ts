import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailCreateOrConnectWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailCreateOrConnectWithoutUserInput.input";
import { BodyDetailCreateWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailCreateWithoutUserInput.input";
import { BodyDetailUpdateWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailUpdateWithoutUserInput.input";
import { BodyDetailUpsertWithoutUserInput } from "../../bodyDetail/inputs/BodyDetailUpsertWithoutUserInput.input";
import { BodyDetailWhereUniqueInput } from "../../bodyDetail/inputs/BodyDetailWhereUniqueInput.input";

@NestJsGraphQL.InputType('BodyDetailUpdateOneWithoutUserNestedInput', { isAbstract: true })
export class BodyDetailUpdateOneWithoutUserNestedInput {
  @NestJsGraphQL.Field(() => BodyDetailCreateWithoutUserInput, { nullable: true })
  create?: BodyDetailCreateWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: BodyDetailCreateOrConnectWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailUpsertWithoutUserInput, { nullable: true })
  upsert?: BodyDetailUpsertWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput, { nullable: true })
  connect?: BodyDetailWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailUpdateWithoutUserInput, { nullable: true })
  update?: BodyDetailUpdateWithoutUserInput | undefined;
}
