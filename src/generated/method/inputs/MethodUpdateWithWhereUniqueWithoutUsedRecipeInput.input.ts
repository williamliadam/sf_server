import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodUpdateWithoutUsedRecipeInput } from "../../method/inputs/MethodUpdateWithoutUsedRecipeInput.input";
import { MethodWhereUniqueInput } from "../../method/inputs/MethodWhereUniqueInput.input";

@NestJsGraphQL.InputType('MethodUpdateWithWhereUniqueWithoutUsedRecipeInput', { isAbstract: true })
export class MethodUpdateWithWhereUniqueWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;

  @NestJsGraphQL.Field(() => MethodUpdateWithoutUsedRecipeInput)
  data!: MethodUpdateWithoutUsedRecipeInput;
}
