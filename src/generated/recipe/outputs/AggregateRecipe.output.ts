import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeAvgAggregate } from "./RecipeAvgAggregate.output";
import { RecipeCountAggregate } from "./RecipeCountAggregate.output";
import { RecipeMaxAggregate } from "./RecipeMaxAggregate.output";
import { RecipeMinAggregate } from "./RecipeMinAggregate.output";
import { RecipeSumAggregate } from "./RecipeSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateRecipe', { isAbstract: true })
export class AggregateRecipe {
  @NestJsGraphQL.Field(() => RecipeCountAggregate, { nullable: true })
  _count!: RecipeCountAggregate | null;

  @NestJsGraphQL.Field(() => RecipeAvgAggregate, { nullable: true })
  _avg!: RecipeAvgAggregate | null;

  @NestJsGraphQL.Field(() => RecipeSumAggregate, { nullable: true })
  _sum!: RecipeSumAggregate | null;

  @NestJsGraphQL.Field(() => RecipeMinAggregate, { nullable: true })
  _min!: RecipeMinAggregate | null;

  @NestJsGraphQL.Field(() => RecipeMaxAggregate, { nullable: true })
  _max!: RecipeMaxAggregate | null;
}
