import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateWithoutUsedMealPlanInput.input";
import { DishPlanUpdateWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanUpdateWithoutUsedMealPlanInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateWithoutUsedMealPlanInput)
  update!: DishPlanUpdateWithoutUsedMealPlanInput;

  @NestJsGraphQL.Field(() => DishPlanCreateWithoutUsedMealPlanInput)
  create!: DishPlanCreateWithoutUsedMealPlanInput;
}
