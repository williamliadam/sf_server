import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanUpdateWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanUpdateWithoutPlanCookerInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput', { isAbstract: true })
export class DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateWithoutPlanCookerInput)
  data!: DishPlanUpdateWithoutPlanCookerInput;
}
