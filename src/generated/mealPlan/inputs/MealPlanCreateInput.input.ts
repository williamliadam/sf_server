import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateNestedManyWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateNestedManyWithoutUsedMealPlanInput.input";
import { MealType } from "../../enums/MealType.enum";
import { UserCreateNestedOneWithoutMyMealPlansInput } from "../../user/inputs/UserCreateNestedOneWithoutMyMealPlansInput.input";

@NestJsGraphQL.InputType('MealPlanCreateInput', { isAbstract: true })
export class MealPlanCreateInput {
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

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyMealPlansInput)
  createBy!: UserCreateNestedOneWithoutMyMealPlansInput;
}
