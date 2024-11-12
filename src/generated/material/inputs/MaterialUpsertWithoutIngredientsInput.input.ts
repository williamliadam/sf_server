import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateWithoutIngredientsInput } from "../../material/inputs/MaterialCreateWithoutIngredientsInput.input";
import { MaterialUpdateWithoutIngredientsInput } from "../../material/inputs/MaterialUpdateWithoutIngredientsInput.input";

@NestJsGraphQL.InputType('MaterialUpsertWithoutIngredientsInput', { isAbstract: true })
export class MaterialUpsertWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => MaterialUpdateWithoutIngredientsInput)
  update!: MaterialUpdateWithoutIngredientsInput;

  @NestJsGraphQL.Field(() => MaterialCreateWithoutIngredientsInput)
  create!: MaterialCreateWithoutIngredientsInput;
}
