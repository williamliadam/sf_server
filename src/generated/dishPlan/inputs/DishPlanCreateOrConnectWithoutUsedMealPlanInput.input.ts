import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateWithoutUsedMealPlanInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanCreateOrConnectWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanCreateOrConnectWithoutUsedMealPlanInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanCreateWithoutUsedMealPlanInput)
  create!: DishPlanCreateWithoutUsedMealPlanInput;
}
