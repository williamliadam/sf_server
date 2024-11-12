import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRow } from "../models/nutritionRow.model";
import { NutritionCount } from "../nutrition/outputs/NutritionCount.output";

@NestJsGraphQL.ObjectType('Nutrition', { isAbstract: true })
export class Nutrition {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  usedRow?: NutritionRow[];

  @NestJsGraphQL.Field(() => NutritionCount, { nullable: true })
  _count?: NutritionCount | null;
}
