import * as NestJsGraphQL from "@nestjs/graphql";
import { Recipe } from "../models/recipe.model";

@NestJsGraphQL.ObjectType('Method', { isAbstract: true })
export class Method {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  desc!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  recipeId?: number | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  usedRecipe?: Recipe | null;
}
