import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { MealPlan } from '../models/mealPlan.model'
import {
  AggregateMealPlanArgs,
  CreateManyMealPlanArgs,
  CreateOneMealPlanArgs,
  DeleteManyMealPlanArgs,
  DeleteOneMealPlanArgs,
  FindFirstMealPlanArgs,
  FindManyMealPlanArgs,
  FindUniqueMealPlanArgs,
  GroupByMealPlanArgs,
  UpdateManyMealPlanArgs,
  UpdateOneMealPlanArgs,
  UpsertOneMealPlanArgs
} from './mealPlan.args'
import { MealPlanService } from './mealPlan.service'
import { AggregateMealPlan } from './outputs/AggregateMealPlan.output'
import { MealPlanGroupBy } from './outputs/MealPlanGroupBy.output'

@NestJsGraphql.Resolver(() => MealPlan)
export class MealPlanResolver {
  constructor(private readonly mealPlanService: MealPlanService) { }

  @NestJsGraphql.Query(() => MealPlan, { nullable: false })
  findFirstMealPlan(@NestJsGraphql.Args() args: FindFirstMealPlanArgs) {
    return this.mealPlanService.findFirst(args)
  }

  @NestJsGraphql.Query(() => MealPlan, { nullable: false })
  findUniqueMealPlan(@NestJsGraphql.Args() args: FindUniqueMealPlanArgs) {
    return this.mealPlanService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [MealPlan], { nullable: false })
  findManyMealPlan(@NestJsGraphql.Args() args: FindManyMealPlanArgs) {
    return this.mealPlanService.findMany(args)
  }

  @NestJsGraphql.Query(() => [MealPlanGroupBy], { nullable: false })
  groupByMealPlan(@NestJsGraphql.Args() args: GroupByMealPlanArgs) {
    return this.mealPlanService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateMealPlan, { nullable: false })
  aggregateMealPlan(@NestJsGraphql.Args() args: AggregateMealPlanArgs) {
    return this.mealPlanService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => MealPlan, { nullable: true })
  createMealPlan(@NestJsGraphql.Args() args: CreateOneMealPlanArgs) {
    return this.mealPlanService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyMealPlan(@NestJsGraphql.Args() args: CreateManyMealPlanArgs) {
    return this.mealPlanService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => MealPlan, { nullable: true })
  updateMealPlan(@NestJsGraphql.Args() args: UpdateOneMealPlanArgs) {
    return this.mealPlanService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyMealPlan(@NestJsGraphql.Args() args: UpdateManyMealPlanArgs) {
    return this.mealPlanService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => MealPlan, { nullable: true })
  upsertMealPlan(@NestJsGraphql.Args() args: UpsertOneMealPlanArgs) {
    return this.mealPlanService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => MealPlan, { nullable: true })
  deleteMealPlan(@NestJsGraphql.Args() args: DeleteOneMealPlanArgs) {
    return this.mealPlanService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyMealPlan(@NestJsGraphql.Args() args: DeleteManyMealPlanArgs) {
    return this.mealPlanService.deleteMany(args)
  }
}

