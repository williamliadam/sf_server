import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";

@NestJsGraphQL.InputType('MealPlanCreateManyCreateByInput', { isAbstract: true })
export class MealPlanCreateManyCreateByInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  planTime?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  type?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;
}
