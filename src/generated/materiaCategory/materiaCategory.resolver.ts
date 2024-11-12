import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { MateriaCategory } from '../models/materiaCategory.model'
import {
  AggregateMateriaCategoryArgs,
  CreateManyMateriaCategoryArgs,
  CreateOneMateriaCategoryArgs,
  DeleteManyMateriaCategoryArgs,
  DeleteOneMateriaCategoryArgs,
  FindFirstMateriaCategoryArgs,
  FindManyMateriaCategoryArgs,
  FindUniqueMateriaCategoryArgs,
  GroupByMateriaCategoryArgs,
  UpdateManyMateriaCategoryArgs,
  UpdateOneMateriaCategoryArgs,
  UpsertOneMateriaCategoryArgs
} from './materiaCategory.args'
import { MateriaCategoryService } from './materiaCategory.service'
import { AggregateMateriaCategory } from './outputs/AggregateMateriaCategory.output'
import { MateriaCategoryGroupBy } from './outputs/MateriaCategoryGroupBy.output'

@NestJsGraphql.Resolver(() => MateriaCategory)
export class MateriaCategoryResolver {
  constructor(private readonly materiaCategoryService: MateriaCategoryService) { }

  @NestJsGraphql.Query(() => MateriaCategory, { nullable: false })
  findFirstMateriaCategory(@NestJsGraphql.Args() args: FindFirstMateriaCategoryArgs) {
    return this.materiaCategoryService.findFirst(args)
  }

  @NestJsGraphql.Query(() => MateriaCategory, { nullable: false })
  findUniqueMateriaCategory(@NestJsGraphql.Args() args: FindUniqueMateriaCategoryArgs) {
    return this.materiaCategoryService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [MateriaCategory], { nullable: false })
  findManyMateriaCategory(@NestJsGraphql.Args() args: FindManyMateriaCategoryArgs) {
    return this.materiaCategoryService.findMany(args)
  }

  @NestJsGraphql.Query(() => [MateriaCategoryGroupBy], { nullable: false })
  groupByMateriaCategory(@NestJsGraphql.Args() args: GroupByMateriaCategoryArgs) {
    return this.materiaCategoryService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateMateriaCategory, { nullable: false })
  aggregateMateriaCategory(@NestJsGraphql.Args() args: AggregateMateriaCategoryArgs) {
    return this.materiaCategoryService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => MateriaCategory, { nullable: true })
  createMateriaCategory(@NestJsGraphql.Args() args: CreateOneMateriaCategoryArgs) {
    return this.materiaCategoryService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyMateriaCategory(@NestJsGraphql.Args() args: CreateManyMateriaCategoryArgs) {
    return this.materiaCategoryService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => MateriaCategory, { nullable: true })
  updateMateriaCategory(@NestJsGraphql.Args() args: UpdateOneMateriaCategoryArgs) {
    return this.materiaCategoryService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyMateriaCategory(@NestJsGraphql.Args() args: UpdateManyMateriaCategoryArgs) {
    return this.materiaCategoryService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => MateriaCategory, { nullable: true })
  upsertMateriaCategory(@NestJsGraphql.Args() args: UpsertOneMateriaCategoryArgs) {
    return this.materiaCategoryService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => MateriaCategory, { nullable: true })
  deleteMateriaCategory(@NestJsGraphql.Args() args: DeleteOneMateriaCategoryArgs) {
    return this.materiaCategoryService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyMateriaCategory(@NestJsGraphql.Args() args: DeleteManyMateriaCategoryArgs) {
    return this.materiaCategoryService.deleteMany(args)
  }
}

