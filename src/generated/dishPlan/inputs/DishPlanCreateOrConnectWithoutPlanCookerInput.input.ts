import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateWithoutPlanCookerInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanCreateOrConnectWithoutPlanCookerInput', { isAbstract: true })
export class DishPlanCreateOrConnectWithoutPlanCookerInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanCreateWithoutPlanCookerInput)
  create!: DishPlanCreateWithoutPlanCookerInput;
}
