import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { DishTemplate } from '../models/dishTemplate.model'
import {
  AggregateDishTemplateArgs,
  CreateManyDishTemplateArgs,
  CreateOneDishTemplateArgs,
  DeleteManyDishTemplateArgs,
  DeleteOneDishTemplateArgs,
  FindFirstDishTemplateArgs,
  FindManyDishTemplateArgs,
  FindUniqueDishTemplateArgs,
  GroupByDishTemplateArgs,
  UpdateManyDishTemplateArgs,
  UpdateOneDishTemplateArgs,
  UpsertOneDishTemplateArgs
} from './dishTemplate.args'
import { DishTemplateService } from './dishTemplate.service'
import { AggregateDishTemplate } from './outputs/AggregateDishTemplate.output'
import { DishTemplateGroupBy } from './outputs/DishTemplateGroupBy.output'

@NestJsGraphql.Resolver(() => DishTemplate)
export class DishTemplateResolver {
  constructor(private readonly dishTemplateService: DishTemplateService) { }

  @NestJsGraphql.Query(() => DishTemplate, { nullable: false })
  findFirstDishTemplate(@NestJsGraphql.Args() args: FindFirstDishTemplateArgs) {
    return this.dishTemplateService.findFirst(args)
  }

  @NestJsGraphql.Query(() => DishTemplate, { nullable: false })
  findUniqueDishTemplate(@NestJsGraphql.Args() args: FindUniqueDishTemplateArgs) {
    return this.dishTemplateService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [DishTemplate], { nullable: false })
  findManyDishTemplate(@NestJsGraphql.Args() args: FindManyDishTemplateArgs) {
    return this.dishTemplateService.findMany(args)
  }

  @NestJsGraphql.Query(() => [DishTemplateGroupBy], { nullable: false })
  groupByDishTemplate(@NestJsGraphql.Args() args: GroupByDishTemplateArgs) {
    return this.dishTemplateService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateDishTemplate, { nullable: false })
  aggregateDishTemplate(@NestJsGraphql.Args() args: AggregateDishTemplateArgs) {
    return this.dishTemplateService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => DishTemplate, { nullable: true })
  createDishTemplate(@NestJsGraphql.Args() args: CreateOneDishTemplateArgs) {
    return this.dishTemplateService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyDishTemplate(@NestJsGraphql.Args() args: CreateManyDishTemplateArgs) {
    return this.dishTemplateService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => DishTemplate, { nullable: true })
  updateDishTemplate(@NestJsGraphql.Args() args: UpdateOneDishTemplateArgs) {
    return this.dishTemplateService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyDishTemplate(@NestJsGraphql.Args() args: UpdateManyDishTemplateArgs) {
    return this.dishTemplateService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => DishTemplate, { nullable: true })
  upsertDishTemplate(@NestJsGraphql.Args() args: UpsertOneDishTemplateArgs) {
    return this.dishTemplateService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => DishTemplate, { nullable: true })
  deleteDishTemplate(@NestJsGraphql.Args() args: DeleteOneDishTemplateArgs) {
    return this.dishTemplateService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyDishTemplate(@NestJsGraphql.Args() args: DeleteManyDishTemplateArgs) {
    return this.dishTemplateService.deleteMany(args)
  }
}

