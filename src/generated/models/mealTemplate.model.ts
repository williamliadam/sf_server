import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCount } from "../mealTemplate/outputs/MealTemplateCount.output";
import { DishTemplate } from "../models/dishTemplate.model";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('MealTemplate', { isAbstract: true })
export class MealTemplate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  createBy?: User;

  dishTemplates?: DishTemplate[];

  @NestJsGraphQL.Field(() => MealTemplateCount, { nullable: true })
  _count?: MealTemplateCount | null;
}
