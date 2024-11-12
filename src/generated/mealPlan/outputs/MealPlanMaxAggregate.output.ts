import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";

@NestJsGraphQL.ObjectType('MealPlanMaxAggregate', { isAbstract: true })
export class MealPlanMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  planTime!: Date | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  type!: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | null;
}
