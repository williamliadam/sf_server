import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCount } from "../materiaCategory/outputs/MateriaCategoryCount.output";
import { Material } from "../models/material.model";

@NestJsGraphQL.ObjectType('MateriaCategory', { isAbstract: true })
export class MateriaCategory {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lastId?: number | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  materials?: Material[];

  next?: MateriaCategory[];

  last?: MateriaCategory | null;

  @NestJsGraphQL.Field(() => MateriaCategoryCount, { nullable: true })
  _count?: MateriaCategoryCount | null;
}
