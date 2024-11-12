import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateScalarWhereInput } from "../../dishTemplate/inputs/DishTemplateScalarWhereInput.input";
import { DishTemplateUpdateManyMutationInput } from "../../dishTemplate/inputs/DishTemplateUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateManyWithWhereWithoutRecipeInput', { isAbstract: true })
export class DishTemplateUpdateManyWithWhereWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishTemplateScalarWhereInput)
  where!: DishTemplateScalarWhereInput;

  @NestJsGraphQL.Field(() => DishTemplateUpdateManyMutationInput)
  data!: DishTemplateUpdateManyMutationInput;
}
