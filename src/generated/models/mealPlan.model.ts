import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../enums/MealType.enum";
import { MealPlanCount } from "../mealPlan/outputs/MealPlanCount.output";
import { DishPlan } from "../models/dishPlan.model";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('MealPlan', { isAbstract: true })
export class MealPlan {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  planTime?: Date | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => MealType)
  type!: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL";

  dishPlans?: DishPlan[];

  createBy?: User;

  @NestJsGraphQL.Field(() => MealPlanCount, { nullable: true })
  _count?: MealPlanCount | null;
}
