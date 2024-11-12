import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialScalarWhereInput } from "../../material/inputs/MaterialScalarWhereInput.input";
import { MaterialUpdateManyMutationInput } from "../../material/inputs/MaterialUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('MaterialUpdateManyWithWhereWithoutCategoryInput', { isAbstract: true })
export class MaterialUpdateManyWithWhereWithoutCategoryInput {
  @NestJsGraphQL.Field(() => MaterialScalarWhereInput)
  where!: MaterialScalarWhereInput;

  @NestJsGraphQL.Field(() => MaterialUpdateManyMutationInput)
  data!: MaterialUpdateManyMutationInput;
}
