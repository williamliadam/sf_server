import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateWithoutRecipeInput.input";
import { DishPlanUpdateWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanUpdateWithoutRecipeInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpsertWithWhereUniqueWithoutRecipeInput', { isAbstract: true })
export class DishPlanUpsertWithWhereUniqueWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateWithoutRecipeInput)
  update!: DishPlanUpdateWithoutRecipeInput;

  @NestJsGraphQL.Field(() => DishPlanCreateWithoutRecipeInput)
  create!: DishPlanCreateWithoutRecipeInput;
}
