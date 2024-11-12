import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateNestedOneWithoutIngredientsInput } from "../../material/inputs/MaterialCreateNestedOneWithoutIngredientsInput.input";
import { MateriaUnitCreateNestedOneWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateNestedOneWithoutIngredientsInput.input";
import { RecipeCreateNestedOneWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutIngredientsInput.input";

@NestJsGraphQL.InputType('IngredientCreateInput', { isAbstract: true })
export class IngredientCreateInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateNestedOneWithoutIngredientsInput)
  material!: MaterialCreateNestedOneWithoutIngredientsInput;

  @NestJsGraphQL.Field(() => MateriaUnitCreateNestedOneWithoutIngredientsInput)
  unit!: MateriaUnitCreateNestedOneWithoutIngredientsInput;

  @NestJsGraphQL.Field(() => RecipeCreateNestedOneWithoutIngredientsInput, { nullable: true })
  usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput | undefined;
}
