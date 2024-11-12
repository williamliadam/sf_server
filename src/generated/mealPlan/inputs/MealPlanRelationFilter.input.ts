import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanWhereInput } from "../../mealPlan/inputs/MealPlanWhereInput.input";

@NestJsGraphQL.InputType('MealPlanRelationFilter', { isAbstract: true })
export class MealPlanRelationFilter {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  is?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  isNot?: MealPlanWhereInput | undefined;
}
