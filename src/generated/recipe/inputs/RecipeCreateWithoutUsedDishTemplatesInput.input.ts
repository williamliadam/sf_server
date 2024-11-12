import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateNestedManyWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateNestedManyWithoutRecipeInput.input";
import { IngredientCreateNestedManyWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateNestedManyWithoutUsedRecipeInput.input";
import { MethodCreateNestedManyWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateNestedManyWithoutUsedRecipeInput.input";
import { UserCreateNestedOneWithoutMyRecipesInput } from "../../user/inputs/UserCreateNestedOneWithoutMyRecipesInput.input";

@NestJsGraphQL.InputType('RecipeCreateWithoutUsedDishTemplatesInput', { isAbstract: true })
export class RecipeCreateWithoutUsedDishTemplatesInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  stars!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyRecipesInput)
  author!: UserCreateNestedOneWithoutMyRecipesInput;

  @NestJsGraphQL.Field(() => IngredientCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
  ingredients?: IngredientCreateNestedManyWithoutUsedRecipeInput | undefined;

  @NestJsGraphQL.Field(() => MethodCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
  methods?: MethodCreateNestedManyWithoutUsedRecipeInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateNestedManyWithoutRecipeInput, { nullable: true })
  usedDishPlans?: DishPlanCreateNestedManyWithoutRecipeInput | undefined;
}
