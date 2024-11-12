import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlan } from "../models/dishPlan.model";
import { DishTemplate } from "../models/dishTemplate.model";
import { Ingredient } from "../models/ingredient.model";
import { Method } from "../models/method.model";
import { User } from "../models/user.model";
import { RecipeCount } from "../recipe/outputs/RecipeCount.output";

@NestJsGraphQL.ObjectType('Recipe', { isAbstract: true })
export class Recipe {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  stars!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  authorId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  author?: User;

  ingredients?: Ingredient[];

  methods?: Method[];

  usedDishPlans?: DishPlan[];

  usedDishTemplates?: DishTemplate[];

  @NestJsGraphQL.Field(() => RecipeCount, { nullable: true })
  _count?: RecipeCount | null;
}
