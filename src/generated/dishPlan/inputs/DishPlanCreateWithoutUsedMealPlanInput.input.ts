import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateNestedOneWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutUsedDishPlansInput.input";
import { UserCreateNestedOneWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateNestedOneWithoutChargeDishPlansInput.input";

@NestJsGraphQL.InputType('DishPlanCreateWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanCreateWithoutUsedMealPlanInput {
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
}
