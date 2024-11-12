import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateNestedOneWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateNestedOneWithoutDishPlansInput.input";
import { RecipeCreateNestedOneWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutUsedDishPlansInput.input";
import { UserCreateNestedOneWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateNestedOneWithoutChargeDishPlansInput.input";

@NestJsGraphQL.InputType('DishPlanCreateInput', { isAbstract: true })
export class DishPlanCreateInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutChargeDishPlansInput)
  planCooker!: UserCreateNestedOneWithoutChargeDishPlansInput;

  @NestJsGraphQL.Field(() => RecipeCreateNestedOneWithoutUsedDishPlansInput)
  recipe!: RecipeCreateNestedOneWithoutUsedDishPlansInput;

  @NestJsGraphQL.Field(() => MealPlanCreateNestedOneWithoutDishPlansInput, { nullable: true })
  usedMealPlan?: MealPlanCreateNestedOneWithoutDishPlansInput | undefined;
}
