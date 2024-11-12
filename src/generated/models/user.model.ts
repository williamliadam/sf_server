import * as NestJsGraphQL from "@nestjs/graphql";
import { Role } from "../enums/Role.enum";
import { BodyDetail } from "../models/bodyDetail.model";
import { DishPlan } from "../models/dishPlan.model";
import { MealPlan } from "../models/mealPlan.model";
import { MealTemplate } from "../models/mealTemplate.model";
import { Post } from "../models/post.model";
import { Profile } from "../models/profile.model";
import { Recipe } from "../models/recipe.model";
import { UserCount } from "../user/outputs/UserCount.output";

@NestJsGraphQL.ObjectType('User', { isAbstract: true })
export class User {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email?: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name?: string | null;

  @NestJsGraphQL.Field(() => String)
  password!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phone?: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  wxId?: string | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => Role)
  role!: "USER" | "ADMIN";

  profile?: Profile | null;

  bodyDetail?: BodyDetail | null;

  myPosts?: Post[];

  myRecipes?: Recipe[];

  myMealTemplates?: MealTemplate[];

  myMealPlans?: MealPlan[];

  chargeDishPlans?: DishPlan[];

  @NestJsGraphQL.Field(() => UserCount, { nullable: true })
  _count?: UserCount | null;
}
