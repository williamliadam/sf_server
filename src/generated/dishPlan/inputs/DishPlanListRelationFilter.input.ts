import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanWhereInput } from "../../dishPlan/inputs/DishPlanWhereInput.input";

@NestJsGraphQL.InputType('DishPlanListRelationFilter', { isAbstract: true })
export class DishPlanListRelationFilter {
  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  every?: DishPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  some?: DishPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  none?: DishPlanWhereInput | undefined;
}
