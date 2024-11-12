import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('BodyDetailCountAggregate', { isAbstract: true })
export class BodyDetailCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  weight!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  height!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  age!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  bmi!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  bmr!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  tdee!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  createdAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updatedAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
