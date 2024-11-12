import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateWithoutRecipeInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanCreateOrConnectWithoutRecipeInput', { isAbstract: true })
export class DishPlanCreateOrConnectWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanCreateWithoutRecipeInput)
  create!: DishPlanCreateWithoutRecipeInput;
}
