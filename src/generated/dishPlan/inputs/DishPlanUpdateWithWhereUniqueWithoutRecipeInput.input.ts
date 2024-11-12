import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanUpdateWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanUpdateWithoutRecipeInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateWithWhereUniqueWithoutRecipeInput', { isAbstract: true })
export class DishPlanUpdateWithWhereUniqueWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateWithoutRecipeInput)
  data!: DishPlanUpdateWithoutRecipeInput;
}
