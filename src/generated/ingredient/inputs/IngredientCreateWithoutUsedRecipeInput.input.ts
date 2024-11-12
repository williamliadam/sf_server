import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateNestedOneWithoutIngredientsInput } from "../../material/inputs/MaterialCreateNestedOneWithoutIngredientsInput.input";
import { MateriaUnitCreateNestedOneWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateNestedOneWithoutIngredientsInput.input";

@NestJsGraphQL.InputType('IngredientCreateWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientCreateWithoutUsedRecipeInput {
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
}
