import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateAvgAggregate } from "./MealTemplateAvgAggregate.output";
import { MealTemplateCountAggregate } from "./MealTemplateCountAggregate.output";
import { MealTemplateMaxAggregate } from "./MealTemplateMaxAggregate.output";
import { MealTemplateMinAggregate } from "./MealTemplateMinAggregate.output";
import { MealTemplateSumAggregate } from "./MealTemplateSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateMealTemplate', { isAbstract: true })
export class AggregateMealTemplate {
  @NestJsGraphQL.Field(() => MealTemplateCountAggregate, { nullable: true })
  _count!: MealTemplateCountAggregate | null;

  @NestJsGraphQL.Field(() => MealTemplateAvgAggregate, { nullable: true })
  _avg!: MealTemplateAvgAggregate | null;

  @NestJsGraphQL.Field(() => MealTemplateSumAggregate, { nullable: true })
  _sum!: MealTemplateSumAggregate | null;

  @NestJsGraphQL.Field(() => MealTemplateMinAggregate, { nullable: true })
  _min!: MealTemplateMinAggregate | null;

  @NestJsGraphQL.Field(() => MealTemplateMaxAggregate, { nullable: true })
  _max!: MealTemplateMaxAggregate | null;
}
