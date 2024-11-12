import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateAvgAggregate } from "./DishTemplateAvgAggregate.output";
import { DishTemplateCountAggregate } from "./DishTemplateCountAggregate.output";
import { DishTemplateMaxAggregate } from "./DishTemplateMaxAggregate.output";
import { DishTemplateMinAggregate } from "./DishTemplateMinAggregate.output";
import { DishTemplateSumAggregate } from "./DishTemplateSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateDishTemplate', { isAbstract: true })
export class AggregateDishTemplate {
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
