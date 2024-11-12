import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { MateriaUnit } from '../models/materiaUnit.model'
import {
  AggregateMateriaUnitArgs,
  CreateManyMateriaUnitArgs,
  CreateOneMateriaUnitArgs,
  DeleteManyMateriaUnitArgs,
  DeleteOneMateriaUnitArgs,
  FindFirstMateriaUnitArgs,
  FindManyMateriaUnitArgs,
  FindUniqueMateriaUnitArgs,
  GroupByMateriaUnitArgs,
  UpdateManyMateriaUnitArgs,
  UpdateOneMateriaUnitArgs,
  UpsertOneMateriaUnitArgs
} from './materiaUnit.args'
import { MateriaUnitService } from './materiaUnit.service'
import { AggregateMateriaUnit } from './outputs/AggregateMateriaUnit.output'
import { MateriaUnitGroupBy } from './outputs/MateriaUnitGroupBy.output'

@NestJsGraphql.Resolver(() => MateriaUnit)
export class MateriaUnitResolver {
  constructor(private readonly materiaUnitService: MateriaUnitService) { }

  @NestJsGraphql.Query(() => MateriaUnit, { nullable: false })
  findFirstMateriaUnit(@NestJsGraphql.Args() args: FindFirstMateriaUnitArgs) {
    return this.materiaUnitService.findFirst(args)
  }

  @NestJsGraphql.Query(() => MateriaUnit, { nullable: false })
  findUniqueMateriaUnit(@NestJsGraphql.Args() args: FindUniqueMateriaUnitArgs) {
    return this.materiaUnitService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [MateriaUnit], { nullable: false })
  findManyMateriaUnit(@NestJsGraphql.Args() args: FindManyMateriaUnitArgs) {
    return this.materiaUnitService.findMany(args)
  }

  @NestJsGraphql.Query(() => [MateriaUnitGroupBy], { nullable: false })
  groupByMateriaUnit(@NestJsGraphql.Args() args: GroupByMateriaUnitArgs) {
    return this.materiaUnitService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateMateriaUnit, { nullable: false })
  aggregateMateriaUnit(@NestJsGraphql.Args() args: AggregateMateriaUnitArgs) {
    return this.materiaUnitService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => MateriaUnit, { nullable: true })
  createMateriaUnit(@NestJsGraphql.Args() args: CreateOneMateriaUnitArgs) {
    return this.materiaUnitService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyMateriaUnit(@NestJsGraphql.Args() args: CreateManyMateriaUnitArgs) {
    return this.materiaUnitService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => MateriaUnit, { nullable: true })
  updateMateriaUnit(@NestJsGraphql.Args() args: UpdateOneMateriaUnitArgs) {
    return this.materiaUnitService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyMateriaUnit(@NestJsGraphql.Args() args: UpdateManyMateriaUnitArgs) {
    return this.materiaUnitService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => MateriaUnit, { nullable: true })
  upsertMateriaUnit(@NestJsGraphql.Args() args: UpsertOneMateriaUnitArgs) {
    return this.materiaUnitService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => MateriaUnit, { nullable: true })
  deleteMateriaUnit(@NestJsGraphql.Args() args: DeleteOneMateriaUnitArgs) {
    return this.materiaUnitService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyMateriaUnit(@NestJsGraphql.Args() args: DeleteManyMateriaUnitArgs) {
    return this.materiaUnitService.deleteMany(args)
  }
}

