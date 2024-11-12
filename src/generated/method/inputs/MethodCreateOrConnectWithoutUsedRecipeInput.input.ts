import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodCreateWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateWithoutUsedRecipeInput.input";
import { MethodWhereUniqueInput } from "../../method/inputs/MethodWhereUniqueInput.input";

@NestJsGraphQL.InputType('MethodCreateOrConnectWithoutUsedRecipeInput', { isAbstract: true })
export class MethodCreateOrConnectWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;

  @NestJsGraphQL.Field(() => MethodCreateWithoutUsedRecipeInput)
  create!: MethodCreateWithoutUsedRecipeInput;
}
