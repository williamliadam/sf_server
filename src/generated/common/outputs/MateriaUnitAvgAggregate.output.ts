import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MateriaUnitAvgAggregate', { isAbstract: true })
export class MateriaUnitAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  toKilo!: number | null;
}
