import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateManyCreateByInput } from "../../mealPlan/inputs/MealPlanCreateManyCreateByInput.input";

@NestJsGraphQL.InputType('MealPlanCreateManyCreateByInputEnvelope', { isAbstract: true })
export class MealPlanCreateManyCreateByInputEnvelope {
  @NestJsGraphQL.Field(() => [MealPlanCreateManyCreateByInput])
  data!: MealPlanCreateManyCreateByInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
