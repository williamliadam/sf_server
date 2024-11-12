import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodScalarWhereInput } from "../../method/inputs/MethodScalarWhereInput.input";
import { MethodUpdateManyMutationInput } from "../../method/inputs/MethodUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('MethodUpdateManyWithWhereWithoutUsedRecipeInput', { isAbstract: true })
export class MethodUpdateManyWithWhereWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => MethodScalarWhereInput)
  where!: MethodScalarWhereInput;

  @NestJsGraphQL.Field(() => MethodUpdateManyMutationInput)
  data!: MethodUpdateManyMutationInput;
}
