import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Nutrition } from '../models/nutrition.model'
import {
  AggregateNutritionArgs,
  CreateManyNutritionArgs,
  CreateOneNutritionArgs,
  DeleteManyNutritionArgs,
  DeleteOneNutritionArgs,
  FindFirstNutritionArgs,
  FindManyNutritionArgs,
  FindUniqueNutritionArgs,
  GroupByNutritionArgs,
  UpdateManyNutritionArgs,
  UpdateOneNutritionArgs,
  UpsertOneNutritionArgs
} from './nutrition.args'
import { NutritionService } from './nutrition.service'
import { AggregateNutrition } from './outputs/AggregateNutrition.output'
import { NutritionGroupBy } from './outputs/NutritionGroupBy.output'

@NestJsGraphql.Resolver(() => Nutrition)
export class NutritionResolver {
  constructor(private readonly nutritionService: NutritionService) { }

  @NestJsGraphql.Query(() => Nutrition, { nullable: false })
  findFirstNutrition(@NestJsGraphql.Args() args: FindFirstNutritionArgs) {
    return this.nutritionService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Nutrition, { nullable: false })
  findUniqueNutrition(@NestJsGraphql.Args() args: FindUniqueNutritionArgs) {
    return this.nutritionService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Nutrition], { nullable: false })
  findManyNutrition(@NestJsGraphql.Args() args: FindManyNutritionArgs) {
    return this.nutritionService.findMany(args)
  }

  @NestJsGraphql.Query(() => [NutritionGroupBy], { nullable: false })
  groupByNutrition(@NestJsGraphql.Args() args: GroupByNutritionArgs) {
    return this.nutritionService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateNutrition, { nullable: false })
  aggregateNutrition(@NestJsGraphql.Args() args: AggregateNutritionArgs) {
    return this.nutritionService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Nutrition, { nullable: true })
  createNutrition(@NestJsGraphql.Args() args: CreateOneNutritionArgs) {
    return this.nutritionService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyNutrition(@NestJsGraphql.Args() args: CreateManyNutritionArgs) {
    return this.nutritionService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Nutrition, { nullable: true })
  updateNutrition(@NestJsGraphql.Args() args: UpdateOneNutritionArgs) {
    return this.nutritionService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyNutrition(@NestJsGraphql.Args() args: UpdateManyNutritionArgs) {
    return this.nutritionService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Nutrition, { nullable: true })
  upsertNutrition(@NestJsGraphql.Args() args: UpsertOneNutritionArgs) {
    return this.nutritionService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Nutrition, { nullable: true })
  deleteNutrition(@NestJsGraphql.Args() args: DeleteOneNutritionArgs) {
    return this.nutritionService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyNutrition(@NestJsGraphql.Args() args: DeleteManyNutritionArgs) {
    return this.nutritionService.deleteMany(args)
  }
}

