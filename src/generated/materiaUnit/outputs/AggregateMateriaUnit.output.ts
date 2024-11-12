import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitAvgAggregate } from "./MateriaUnitAvgAggregate.output";
import { MateriaUnitCountAggregate } from "./MateriaUnitCountAggregate.output";
import { MateriaUnitMaxAggregate } from "./MateriaUnitMaxAggregate.output";
import { MateriaUnitMinAggregate } from "./MateriaUnitMinAggregate.output";
import { MateriaUnitSumAggregate } from "./MateriaUnitSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateMateriaUnit', { isAbstract: true })
export class AggregateMateriaUnit {
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
