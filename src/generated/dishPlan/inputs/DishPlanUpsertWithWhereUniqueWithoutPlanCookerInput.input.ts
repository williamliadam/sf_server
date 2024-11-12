import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateWithoutPlanCookerInput.input";
import { DishPlanUpdateWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanUpdateWithoutPlanCookerInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput', { isAbstract: true })
export class DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateWithoutPlanCookerInput)
  update!: DishPlanUpdateWithoutPlanCookerInput;

  @NestJsGraphQL.Field(() => DishPlanCreateWithoutPlanCookerInput)
  create!: DishPlanCreateWithoutPlanCookerInput;
}
