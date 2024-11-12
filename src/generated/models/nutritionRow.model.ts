import * as NestJsGraphQL from "@nestjs/graphql";
import { Material } from "../models/material.model";
import { Nutrition } from "../models/nutrition.model";

@NestJsGraphQL.ObjectType('NutritionRow', { isAbstract: true })
export class NutritionRow {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  nutirtionId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  belongToId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  nutirtion?: Nutrition;

  belongMaterial?: Material;
}
