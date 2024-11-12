import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanScalarWhereInput } from "../../dishPlan/inputs/DishPlanScalarWhereInput.input";
import { DishPlanUpdateManyMutationInput } from "../../dishPlan/inputs/DishPlanUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyWithWhereWithoutPlanCookerInput', { isAbstract: true })
export class DishPlanUpdateManyWithWhereWithoutPlanCookerInput {
  @NestJsGraphQL.Field(() => DishPlanScalarWhereInput)
  where!: DishPlanScalarWhereInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateManyMutationInput)
  data!: DishPlanUpdateManyMutationInput;
}
