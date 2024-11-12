import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { MealTemplate } from '../models/mealTemplate.model'
import {
  AggregateMealTemplateArgs,
  CreateManyMealTemplateArgs,
  CreateOneMealTemplateArgs,
  DeleteManyMealTemplateArgs,
  DeleteOneMealTemplateArgs,
  FindFirstMealTemplateArgs,
  FindManyMealTemplateArgs,
  FindUniqueMealTemplateArgs,
  GroupByMealTemplateArgs,
  UpdateManyMealTemplateArgs,
  UpdateOneMealTemplateArgs,
  UpsertOneMealTemplateArgs
} from './mealTemplate.args'
import { MealTemplateService } from './mealTemplate.service'
import { AggregateMealTemplate } from './outputs/AggregateMealTemplate.output'
import { MealTemplateGroupBy } from './outputs/MealTemplateGroupBy.output'

@NestJsGraphql.Resolver(() => MealTemplate)
export class MealTemplateResolver {
  constructor(private readonly mealTemplateService: MealTemplateService) { }

  @NestJsGraphql.Query(() => MealTemplate, { nullable: false })
  findFirstMealTemplate(@NestJsGraphql.Args() args: FindFirstMealTemplateArgs) {
    return this.mealTemplateService.findFirst(args)
  }

  @NestJsGraphql.Query(() => MealTemplate, { nullable: false })
  findUniqueMealTemplate(@NestJsGraphql.Args() args: FindUniqueMealTemplateArgs) {
    return this.mealTemplateService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [MealTemplate], { nullable: false })
  findManyMealTemplate(@NestJsGraphql.Args() args: FindManyMealTemplateArgs) {
    return this.mealTemplateService.findMany(args)
  }

  @NestJsGraphql.Query(() => [MealTemplateGroupBy], { nullable: false })
  groupByMealTemplate(@NestJsGraphql.Args() args: GroupByMealTemplateArgs) {
    return this.mealTemplateService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateMealTemplate, { nullable: false })
  aggregateMealTemplate(@NestJsGraphql.Args() args: AggregateMealTemplateArgs) {
    return this.mealTemplateService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => MealTemplate, { nullable: true })
  createMealTemplate(@NestJsGraphql.Args() args: CreateOneMealTemplateArgs) {
    return this.mealTemplateService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyMealTemplate(@NestJsGraphql.Args() args: CreateManyMealTemplateArgs) {
    return this.mealTemplateService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => MealTemplate, { nullable: true })
  updateMealTemplate(@NestJsGraphql.Args() args: UpdateOneMealTemplateArgs) {
    return this.mealTemplateService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyMealTemplate(@NestJsGraphql.Args() args: UpdateManyMealTemplateArgs) {
    return this.mealTemplateService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => MealTemplate, { nullable: true })
  upsertMealTemplate(@NestJsGraphql.Args() args: UpsertOneMealTemplateArgs) {
    return this.mealTemplateService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => MealTemplate, { nullable: true })
  deleteMealTemplate(@NestJsGraphql.Args() args: DeleteOneMealTemplateArgs) {
    return this.mealTemplateService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyMealTemplate(@NestJsGraphql.Args() args: DeleteManyMealTemplateArgs) {
    return this.mealTemplateService.deleteMany(args)
  }
}

