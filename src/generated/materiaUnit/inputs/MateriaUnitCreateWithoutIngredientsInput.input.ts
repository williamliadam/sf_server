import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MateriaUnitCreateWithoutIngredientsInput', { isAbstract: true })
export class MateriaUnitCreateWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  toKilo!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
