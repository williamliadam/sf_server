import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyRecipeInput } from "../../dishPlan/inputs/DishPlanCreateManyRecipeInput.input";

@NestJsGraphQL.InputType('DishPlanCreateManyRecipeInputEnvelope', { isAbstract: true })
export class DishPlanCreateManyRecipeInputEnvelope {
  @NestJsGraphQL.Field(() => [DishPlanCreateManyRecipeInput])
  data!: DishPlanCreateManyRecipeInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
