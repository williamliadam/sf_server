import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { DishPlan } from '../models/dishPlan.model'
import {
  AggregateDishPlanArgs,
  CreateManyDishPlanArgs,
  CreateOneDishPlanArgs,
  DeleteManyDishPlanArgs,
  DeleteOneDishPlanArgs,
  FindFirstDishPlanArgs,
  FindManyDishPlanArgs,
  FindUniqueDishPlanArgs,
  GroupByDishPlanArgs,
  UpdateManyDishPlanArgs,
  UpdateOneDishPlanArgs,
  UpsertOneDishPlanArgs
} from './dishPlan.args'
import { DishPlanService } from './dishPlan.service'
import { AggregateDishPlan } from './outputs/AggregateDishPlan.output'
import { DishPlanGroupBy } from './outputs/DishPlanGroupBy.output'

@NestJsGraphql.Resolver(() => DishPlan)
export class DishPlanResolver {
  constructor(private readonly dishPlanService: DishPlanService) { }

  @NestJsGraphql.Query(() => DishPlan, { nullable: false })
  findFirstDishPlan(@NestJsGraphql.Args() args: FindFirstDishPlanArgs) {
    return this.dishPlanService.findFirst(args)
  }

  @NestJsGraphql.Query(() => DishPlan, { nullable: false })
  findUniqueDishPlan(@NestJsGraphql.Args() args: FindUniqueDishPlanArgs) {
    return this.dishPlanService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [DishPlan], { nullable: false })
  findManyDishPlan(@NestJsGraphql.Args() args: FindManyDishPlanArgs) {
    return this.dishPlanService.findMany(args)
  }

  @NestJsGraphql.Query(() => [DishPlanGroupBy], { nullable: false })
  groupByDishPlan(@NestJsGraphql.Args() args: GroupByDishPlanArgs) {
    return this.dishPlanService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateDishPlan, { nullable: false })
  aggregateDishPlan(@NestJsGraphql.Args() args: AggregateDishPlanArgs) {
    return this.dishPlanService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => DishPlan, { nullable: true })
  createDishPlan(@NestJsGraphql.Args() args: CreateOneDishPlanArgs) {
    return this.dishPlanService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyDishPlan(@NestJsGraphql.Args() args: CreateManyDishPlanArgs) {
    return this.dishPlanService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => DishPlan, { nullable: true })
  updateDishPlan(@NestJsGraphql.Args() args: UpdateOneDishPlanArgs) {
    return this.dishPlanService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyDishPlan(@NestJsGraphql.Args() args: UpdateManyDishPlanArgs) {
    return this.dishPlanService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => DishPlan, { nullable: true })
  upsertDishPlan(@NestJsGraphql.Args() args: UpsertOneDishPlanArgs) {
    return this.dishPlanService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => DishPlan, { nullable: true })
  deleteDishPlan(@NestJsGraphql.Args() args: DeleteOneDishPlanArgs) {
    return this.dishPlanService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyDishPlan(@NestJsGraphql.Args() args: DeleteManyDishPlanArgs) {
    return this.dishPlanService.deleteMany(args)
  }
}

