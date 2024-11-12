import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateManyUsedMealPlanInput.input";

@NestJsGraphQL.InputType('DishPlanCreateManyUsedMealPlanInputEnvelope', { isAbstract: true })
export class DishPlanCreateManyUsedMealPlanInputEnvelope {
  @NestJsGraphQL.Field(() => [DishPlanCreateManyUsedMealPlanInput])
  data!: DishPlanCreateManyUsedMealPlanInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
