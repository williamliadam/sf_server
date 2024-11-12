import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitCount } from "../materiaUnit/outputs/MateriaUnitCount.output";
import { Ingredient } from "../models/ingredient.model";

@NestJsGraphQL.ObjectType('MateriaUnit', { isAbstract: true })
export class MateriaUnit {
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

  ingredients?: Ingredient[];

  @NestJsGraphQL.Field(() => MateriaUnitCount, { nullable: true })
  _count?: MateriaUnitCount | null;
}
