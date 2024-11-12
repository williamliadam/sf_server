import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MateriaUnitCount', { isAbstract: true })
export class MateriaUnitCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  ingredients!: number;
}
