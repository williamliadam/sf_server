import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateOrConnectWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateOrConnectWithoutDishPlansInput.input";
import { MealPlanCreateWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateWithoutDishPlansInput.input";
import { MealPlanUpdateWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanUpdateWithoutDishPlansInput.input";
import { MealPlanUpsertWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanUpsertWithoutDishPlansInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateOneWithoutDishPlansNestedInput', { isAbstract: true })
export class MealPlanUpdateOneWithoutDishPlansNestedInput {
  @NestJsGraphQL.Field(() => MealPlanCreateWithoutDishPlansInput, { nullable: true })
  create?: MealPlanCreateWithoutDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanCreateOrConnectWithoutDishPlansInput, { nullable: true })
  connectOrCreate?: MealPlanCreateOrConnectWithoutDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanUpsertWithoutDishPlansInput, { nullable: true })
  upsert?: MealPlanUpsertWithoutDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput, { nullable: true })
  connect?: MealPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanUpdateWithoutDishPlansInput, { nullable: true })
  update?: MealPlanUpdateWithoutDishPlansInput | undefined;
}
