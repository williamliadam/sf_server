import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCount } from "../material/outputs/MaterialCount.output";
import { Ingredient } from "../models/ingredient.model";
import { MateriaCategory } from "../models/materiaCategory.model";
import { NutritionRow } from "../models/nutritionRow.model";

@NestJsGraphQL.ObjectType('Material', { isAbstract: true })
export class Material {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  nickName!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materiaCategoryId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  category?: MateriaCategory;

  nutritionMatrix?: NutritionRow[];

  ingredients?: Ingredient[];

  @NestJsGraphQL.Field(() => MaterialCount, { nullable: true })
  _count?: MaterialCount | null;
}
