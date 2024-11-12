import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanUpdateWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanUpdateWithoutUsedMealPlanInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateWithoutUsedMealPlanInput)
  data!: DishPlanUpdateWithoutUsedMealPlanInput;
}
