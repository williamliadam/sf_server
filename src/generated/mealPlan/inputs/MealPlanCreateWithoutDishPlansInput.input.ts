import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";
import { UserCreateNestedOneWithoutMyMealPlansInput } from "../../user/inputs/UserCreateNestedOneWithoutMyMealPlansInput.input";

@NestJsGraphQL.InputType('MealPlanCreateWithoutDishPlansInput', { isAbstract: true })
export class MealPlanCreateWithoutDishPlansInput {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  planTime?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  type?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyMealPlansInput)
  createBy!: UserCreateNestedOneWithoutMyMealPlansInput;
}
