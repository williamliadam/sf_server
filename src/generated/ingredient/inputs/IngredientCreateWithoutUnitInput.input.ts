import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateNestedOneWithoutIngredientsInput } from "../../material/inputs/MaterialCreateNestedOneWithoutIngredientsInput.input";
import { RecipeCreateNestedOneWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutIngredientsInput.input";

@NestJsGraphQL.InputType('IngredientCreateWithoutUnitInput', { isAbstract: true })
export class IngredientCreateWithoutUnitInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateNestedOneWithoutIngredientsInput)
  material!: MaterialCreateNestedOneWithoutIngredientsInput;

  @NestJsGraphQL.Field(() => RecipeCreateNestedOneWithoutIngredientsInput, { nullable: true })
  usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput | undefined;
}
