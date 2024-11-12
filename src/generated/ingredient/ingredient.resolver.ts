import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Ingredient } from '../models/ingredient.model'
import {
  AggregateIngredientArgs,
  CreateManyIngredientArgs,
  CreateOneIngredientArgs,
  DeleteManyIngredientArgs,
  DeleteOneIngredientArgs,
  FindFirstIngredientArgs,
  FindManyIngredientArgs,
  FindUniqueIngredientArgs,
  GroupByIngredientArgs,
  UpdateManyIngredientArgs,
  UpdateOneIngredientArgs,
  UpsertOneIngredientArgs
} from './ingredient.args'
import { IngredientService } from './ingredient.service'
import { AggregateIngredient } from './outputs/AggregateIngredient.output'
import { IngredientGroupBy } from './outputs/IngredientGroupBy.output'

@NestJsGraphql.Resolver(() => Ingredient)
export class IngredientResolver {
  constructor(private readonly ingredientService: IngredientService) { }

  @NestJsGraphql.Query(() => Ingredient, { nullable: false })
  findFirstIngredient(@NestJsGraphql.Args() args: FindFirstIngredientArgs) {
    return this.ingredientService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Ingredient, { nullable: false })
  findUniqueIngredient(@NestJsGraphql.Args() args: FindUniqueIngredientArgs) {
    return this.ingredientService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Ingredient], { nullable: false })
  findManyIngredient(@NestJsGraphql.Args() args: FindManyIngredientArgs) {
    return this.ingredientService.findMany(args)
  }

  @NestJsGraphql.Query(() => [IngredientGroupBy], { nullable: false })
  groupByIngredient(@NestJsGraphql.Args() args: GroupByIngredientArgs) {
    return this.ingredientService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateIngredient, { nullable: false })
  aggregateIngredient(@NestJsGraphql.Args() args: AggregateIngredientArgs) {
    return this.ingredientService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Ingredient, { nullable: true })
  createIngredient(@NestJsGraphql.Args() args: CreateOneIngredientArgs) {
    return this.ingredientService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyIngredient(@NestJsGraphql.Args() args: CreateManyIngredientArgs) {
    return this.ingredientService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Ingredient, { nullable: true })
  updateIngredient(@NestJsGraphql.Args() args: UpdateOneIngredientArgs) {
    return this.ingredientService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyIngredient(@NestJsGraphql.Args() args: UpdateManyIngredientArgs) {
    return this.ingredientService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Ingredient, { nullable: true })
  upsertIngredient(@NestJsGraphql.Args() args: UpsertOneIngredientArgs) {
    return this.ingredientService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Ingredient, { nullable: true })
  deleteIngredient(@NestJsGraphql.Args() args: DeleteOneIngredientArgs) {
    return this.ingredientService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyIngredient(@NestJsGraphql.Args() args: DeleteManyIngredientArgs) {
    return this.ingredientService.deleteMany(args)
  }
}

