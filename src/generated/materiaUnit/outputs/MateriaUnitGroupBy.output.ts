import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitAvgAggregate } from "./MateriaUnitAvgAggregate.output";
import { MateriaUnitCountAggregate } from "./MateriaUnitCountAggregate.output";
import { MateriaUnitMaxAggregate } from "./MateriaUnitMaxAggregate.output";
import { MateriaUnitMinAggregate } from "./MateriaUnitMinAggregate.output";
import { MateriaUnitSumAggregate } from "./MateriaUnitSumAggregate.output";

@NestJsGraphQL.ObjectType('MateriaUnitGroupBy', { isAbstract: true })
export class MateriaUnitGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  toKilo!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => MateriaUnitCountAggregate, { nullable: true })
  _count!: MateriaUnitCountAggregate | null;

  @NestJsGraphQL.Field(() => MateriaUnitAvgAggregate, { nullable: true })
  _avg!: MateriaUnitAvgAggregate | null;

  @NestJsGraphQL.Field(() => MateriaUnitSumAggregate, { nullable: true })
  _sum!: MateriaUnitSumAggregate | null;

  @NestJsGraphQL.Field(() => MateriaUnitMinAggregate, { nullable: true })
  _min!: MateriaUnitMinAggregate | null;

  @NestJsGraphQL.Field(() => MateriaUnitMaxAggregate, { nullable: true })
  _max!: MateriaUnitMaxAggregate | null;
}
