import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateNestedManyWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateNestedManyWithoutUsedMealPlanInput.input";
import { MealType } from "../../enums/MealType.enum";

@NestJsGraphQL.InputType('MealPlanCreateWithoutCreateByInput', { isAbstract: true })
export class MealPlanCreateWithoutCreateByInput {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  planTime?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  type?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateNestedManyWithoutUsedMealPlanInput, { nullable: true })
  dishPlans?: DishPlanCreateNestedManyWithoutUsedMealPlanInput | undefined;
}
