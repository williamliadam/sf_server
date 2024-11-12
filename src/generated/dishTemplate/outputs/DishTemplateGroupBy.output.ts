import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateAvgAggregate } from "./DishTemplateAvgAggregate.output";
import { DishTemplateCountAggregate } from "./DishTemplateCountAggregate.output";
import { DishTemplateMaxAggregate } from "./DishTemplateMaxAggregate.output";
import { DishTemplateMinAggregate } from "./DishTemplateMinAggregate.output";
import { DishTemplateSumAggregate } from "./DishTemplateSumAggregate.output";

@NestJsGraphQL.ObjectType('DishTemplateGroupBy', { isAbstract: true })
export class DishTemplateGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  recipeId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealTemplateId!: number | null;

  @NestJsGraphQL.Field(() => DishTemplateCountAggregate, { nullable: true })
  _count!: DishTemplateCountAggregate | null;

  @NestJsGraphQL.Field(() => DishTemplateAvgAggregate, { nullable: true })
  _avg!: DishTemplateAvgAggregate | null;

  @NestJsGraphQL.Field(() => DishTemplateSumAggregate, { nullable: true })
  _sum!: DishTemplateSumAggregate | null;

  @NestJsGraphQL.Field(() => DishTemplateMinAggregate, { nullable: true })
  _min!: DishTemplateMinAggregate | null;

  @NestJsGraphQL.Field(() => DishTemplateMaxAggregate, { nullable: true })
  _max!: DishTemplateMaxAggregate | null;
}
