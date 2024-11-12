import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanScalarWhereInput } from "../../dishPlan/inputs/DishPlanScalarWhereInput.input";
import { DishPlanUpdateManyMutationInput } from "../../dishPlan/inputs/DishPlanUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput {
  @NestJsGraphQL.Field(() => DishPlanScalarWhereInput)
  where!: DishPlanScalarWhereInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateManyMutationInput)
  data!: DishPlanUpdateManyMutationInput;
}
