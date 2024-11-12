import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanWhereInput } from "../../mealPlan/inputs/MealPlanWhereInput.input";

@NestJsGraphQL.InputType('MealPlanListRelationFilter', { isAbstract: true })
export class MealPlanListRelationFilter {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  every?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  some?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  none?: MealPlanWhereInput | undefined;
}
