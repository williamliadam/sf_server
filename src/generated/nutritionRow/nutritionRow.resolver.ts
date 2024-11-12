import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { NutritionRow } from '../models/nutritionRow.model'
import {
  AggregateNutritionRowArgs,
  CreateManyNutritionRowArgs,
  CreateOneNutritionRowArgs,
  DeleteManyNutritionRowArgs,
  DeleteOneNutritionRowArgs,
  FindFirstNutritionRowArgs,
  FindManyNutritionRowArgs,
  FindUniqueNutritionRowArgs,
  GroupByNutritionRowArgs,
  UpdateManyNutritionRowArgs,
  UpdateOneNutritionRowArgs,
  UpsertOneNutritionRowArgs
} from './nutritionRow.args'
import { NutritionRowService } from './nutritionRow.service'
import { AggregateNutritionRow } from './outputs/AggregateNutritionRow.output'
import { NutritionRowGroupBy } from './outputs/NutritionRowGroupBy.output'

@NestJsGraphql.Resolver(() => NutritionRow)
export class NutritionRowResolver {
  constructor(private readonly nutritionRowService: NutritionRowService) { }

  @NestJsGraphql.Query(() => NutritionRow, { nullable: false })
  findFirstNutritionRow(@NestJsGraphql.Args() args: FindFirstNutritionRowArgs) {
    return this.nutritionRowService.findFirst(args)
  }

  @NestJsGraphql.Query(() => NutritionRow, { nullable: false })
  findUniqueNutritionRow(@NestJsGraphql.Args() args: FindUniqueNutritionRowArgs) {
    return this.nutritionRowService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [NutritionRow], { nullable: false })
  findManyNutritionRow(@NestJsGraphql.Args() args: FindManyNutritionRowArgs) {
    return this.nutritionRowService.findMany(args)
  }

  @NestJsGraphql.Query(() => [NutritionRowGroupBy], { nullable: false })
  groupByNutritionRow(@NestJsGraphql.Args() args: GroupByNutritionRowArgs) {
    return this.nutritionRowService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateNutritionRow, { nullable: false })
  aggregateNutritionRow(@NestJsGraphql.Args() args: AggregateNutritionRowArgs) {
    return this.nutritionRowService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => NutritionRow, { nullable: true })
  createNutritionRow(@NestJsGraphql.Args() args: CreateOneNutritionRowArgs) {
    return this.nutritionRowService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyNutritionRow(@NestJsGraphql.Args() args: CreateManyNutritionRowArgs) {
    return this.nutritionRowService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => NutritionRow, { nullable: true })
  updateNutritionRow(@NestJsGraphql.Args() args: UpdateOneNutritionRowArgs) {
    return this.nutritionRowService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyNutritionRow(@NestJsGraphql.Args() args: UpdateManyNutritionRowArgs) {
    return this.nutritionRowService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => NutritionRow, { nullable: true })
  upsertNutritionRow(@NestJsGraphql.Args() args: UpsertOneNutritionRowArgs) {
    return this.nutritionRowService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => NutritionRow, { nullable: true })
  deleteNutritionRow(@NestJsGraphql.Args() args: DeleteOneNutritionRowArgs) {
    return this.nutritionRowService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyNutritionRow(@NestJsGraphql.Args() args: DeleteManyNutritionRowArgs) {
    return this.nutritionRowService.deleteMany(args)
  }
}

