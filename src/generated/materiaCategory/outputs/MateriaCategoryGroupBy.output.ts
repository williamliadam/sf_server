import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryAvgAggregate } from "./MateriaCategoryAvgAggregate.output";
import { MateriaCategoryCountAggregate } from "./MateriaCategoryCountAggregate.output";
import { MateriaCategoryMaxAggregate } from "./MateriaCategoryMaxAggregate.output";
import { MateriaCategoryMinAggregate } from "./MateriaCategoryMinAggregate.output";
import { MateriaCategorySumAggregate } from "./MateriaCategorySumAggregate.output";

@NestJsGraphQL.ObjectType('MateriaCategoryGroupBy', { isAbstract: true })
export class MateriaCategoryGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lastId!: number | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => MateriaCategoryCountAggregate, { nullable: true })
  _count!: MateriaCategoryCountAggregate | null;

  @NestJsGraphQL.Field(() => MateriaCategoryAvgAggregate, { nullable: true })
  _avg!: MateriaCategoryAvgAggregate | null;

  @NestJsGraphQL.Field(() => MateriaCategorySumAggregate, { nullable: true })
  _sum!: MateriaCategorySumAggregate | null;

  @NestJsGraphQL.Field(() => MateriaCategoryMinAggregate, { nullable: true })
  _min!: MateriaCategoryMinAggregate | null;

  @NestJsGraphQL.Field(() => MateriaCategoryMaxAggregate, { nullable: true })
  _max!: MateriaCategoryMaxAggregate | null;
}
