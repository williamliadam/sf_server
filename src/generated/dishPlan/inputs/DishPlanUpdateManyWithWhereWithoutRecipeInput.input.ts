import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanScalarWhereInput } from "../../dishPlan/inputs/DishPlanScalarWhereInput.input";
import { DishPlanUpdateManyMutationInput } from "../../dishPlan/inputs/DishPlanUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyWithWhereWithoutRecipeInput', { isAbstract: true })
export class DishPlanUpdateManyWithWhereWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishPlanScalarWhereInput)
  where!: DishPlanScalarWhereInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateManyMutationInput)
  data!: DishPlanUpdateManyMutationInput;
}
