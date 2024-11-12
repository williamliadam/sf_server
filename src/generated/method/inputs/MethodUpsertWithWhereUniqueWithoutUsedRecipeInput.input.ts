import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodCreateWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateWithoutUsedRecipeInput.input";
import { MethodUpdateWithoutUsedRecipeInput } from "../../method/inputs/MethodUpdateWithoutUsedRecipeInput.input";
import { MethodWhereUniqueInput } from "../../method/inputs/MethodWhereUniqueInput.input";

@NestJsGraphQL.InputType('MethodUpsertWithWhereUniqueWithoutUsedRecipeInput', { isAbstract: true })
export class MethodUpsertWithWhereUniqueWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;

  @NestJsGraphQL.Field(() => MethodUpdateWithoutUsedRecipeInput)
  update!: MethodUpdateWithoutUsedRecipeInput;

  @NestJsGraphQL.Field(() => MethodCreateWithoutUsedRecipeInput)
  create!: MethodCreateWithoutUsedRecipeInput;
}
