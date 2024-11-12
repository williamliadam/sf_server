import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateManyPlanCookerInput.input";

@NestJsGraphQL.InputType('DishPlanCreateManyPlanCookerInputEnvelope', { isAbstract: true })
export class DishPlanCreateManyPlanCookerInputEnvelope {
  @NestJsGraphQL.Field(() => [DishPlanCreateManyPlanCookerInput])
  data!: DishPlanCreateManyPlanCookerInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
