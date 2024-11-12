import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateOrConnectWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateOrConnectWithoutDishPlansInput.input";
import { MealPlanCreateWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateWithoutDishPlansInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealPlanCreateNestedOneWithoutDishPlansInput', { isAbstract: true })
export class MealPlanCreateNestedOneWithoutDishPlansInput {
  @NestJsGraphQL.Field(() => MealPlanCreateWithoutDishPlansInput, { nullable: true })
  create?: MealPlanCreateWithoutDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanCreateOrConnectWithoutDishPlansInput, { nullable: true })
  connectOrCreate?: MealPlanCreateOrConnectWithoutDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput, { nullable: true })
  connect?: MealPlanWhereUniqueInput | undefined;
}
