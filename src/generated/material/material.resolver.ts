import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Material } from '../models/material.model'
import {
  AggregateMaterialArgs,
  CreateManyMaterialArgs,
  CreateOneMaterialArgs,
  DeleteManyMaterialArgs,
  DeleteOneMaterialArgs,
  FindFirstMaterialArgs,
  FindManyMaterialArgs,
  FindUniqueMaterialArgs,
  GroupByMaterialArgs,
  UpdateManyMaterialArgs,
  UpdateOneMaterialArgs,
  UpsertOneMaterialArgs
} from './material.args'
import { MaterialService } from './material.service'
import { AggregateMaterial } from './outputs/AggregateMaterial.output'
import { MaterialGroupBy } from './outputs/MaterialGroupBy.output'

@NestJsGraphql.Resolver(() => Material)
export class MaterialResolver {
  constructor(private readonly materialService: MaterialService) { }

  @NestJsGraphql.Query(() => Material, { nullable: false })
  findFirstMaterial(@NestJsGraphql.Args() args: FindFirstMaterialArgs) {
    return this.materialService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Material, { nullable: false })
  findUniqueMaterial(@NestJsGraphql.Args() args: FindUniqueMaterialArgs) {
    return this.materialService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Material], { nullable: false })
  findManyMaterial(@NestJsGraphql.Args() args: FindManyMaterialArgs) {
    return this.materialService.findMany(args)
  }

  @NestJsGraphql.Query(() => [MaterialGroupBy], { nullable: false })
  groupByMaterial(@NestJsGraphql.Args() args: GroupByMaterialArgs) {
    return this.materialService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateMaterial, { nullable: false })
  aggregateMaterial(@NestJsGraphql.Args() args: AggregateMaterialArgs) {
    return this.materialService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Material, { nullable: true })
  createMaterial(@NestJsGraphql.Args() args: CreateOneMaterialArgs) {
    return this.materialService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyMaterial(@NestJsGraphql.Args() args: CreateManyMaterialArgs) {
    return this.materialService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Material, { nullable: true })
  updateMaterial(@NestJsGraphql.Args() args: UpdateOneMaterialArgs) {
    return this.materialService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyMaterial(@NestJsGraphql.Args() args: UpdateManyMaterialArgs) {
    return this.materialService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Material, { nullable: true })
  upsertMaterial(@NestJsGraphql.Args() args: UpsertOneMaterialArgs) {
    return this.materialService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Material, { nullable: true })
  deleteMaterial(@NestJsGraphql.Args() args: DeleteOneMaterialArgs) {
    return this.materialService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyMaterial(@NestJsGraphql.Args() args: DeleteManyMaterialArgs) {
    return this.materialService.deleteMany(args)
  }
}

