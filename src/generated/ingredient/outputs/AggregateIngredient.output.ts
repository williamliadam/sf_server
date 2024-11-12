import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientAvgAggregate } from "./IngredientAvgAggregate.output";
import { IngredientCountAggregate } from "./IngredientCountAggregate.output";
import { IngredientMaxAggregate } from "./IngredientMaxAggregate.output";
import { IngredientMinAggregate } from "./IngredientMinAggregate.output";
import { IngredientSumAggregate } from "./IngredientSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateIngredient', { isAbstract: true })
export class AggregateIngredient {
  @NestJsGraphQL.Field(() => IngredientCountAggregate, { nullable: true })
  _count!: IngredientCountAggregate | null;

  @NestJsGraphQL.Field(() => IngredientAvgAggregate, { nullable: true })
  _avg!: IngredientAvgAggregate | null;

  @NestJsGraphQL.Field(() => IngredientSumAggregate, { nullable: true })
  _sum!: IngredientSumAggregate | null;

  @NestJsGraphQL.Field(() => IngredientMinAggregate, { nullable: true })
  _min!: IngredientMinAggregate | null;

  @NestJsGraphQL.Field(() => IngredientMaxAggregate, { nullable: true })
  _max!: IngredientMaxAggregate | null;
}
