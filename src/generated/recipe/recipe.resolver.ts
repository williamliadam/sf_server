import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Recipe } from '../models/recipe.model'
import { AggregateRecipe } from './outputs/AggregateRecipe.output'
import { RecipeGroupBy } from './outputs/RecipeGroupBy.output'
import {
  AggregateRecipeArgs,
  CreateManyRecipeArgs,
  CreateOneRecipeArgs,
  DeleteManyRecipeArgs,
  DeleteOneRecipeArgs,
  FindFirstRecipeArgs,
  FindManyRecipeArgs,
  FindUniqueRecipeArgs,
  GroupByRecipeArgs,
  UpdateManyRecipeArgs,
  UpdateOneRecipeArgs,
  UpsertOneRecipeArgs
} from './recipe.args'
import { RecipeService } from './recipe.service'

@NestJsGraphql.Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) { }

  @NestJsGraphql.Query(() => Recipe, { nullable: false })
  findFirstRecipe(@NestJsGraphql.Args() args: FindFirstRecipeArgs) {
    return this.recipeService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Recipe, { nullable: false })
  findUniqueRecipe(@NestJsGraphql.Args() args: FindUniqueRecipeArgs) {
    return this.recipeService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Recipe], { nullable: false })
  findManyRecipe(@NestJsGraphql.Args() args: FindManyRecipeArgs) {
    return this.recipeService.findMany(args)
  }

  @NestJsGraphql.Query(() => [RecipeGroupBy], { nullable: false })
  groupByRecipe(@NestJsGraphql.Args() args: GroupByRecipeArgs) {
    return this.recipeService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateRecipe, { nullable: false })
  aggregateRecipe(@NestJsGraphql.Args() args: AggregateRecipeArgs) {
    return this.recipeService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Recipe, { nullable: true })
  createRecipe(@NestJsGraphql.Args() args: CreateOneRecipeArgs) {
    return this.recipeService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyRecipe(@NestJsGraphql.Args() args: CreateManyRecipeArgs) {
    return this.recipeService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Recipe, { nullable: true })
  updateRecipe(@NestJsGraphql.Args() args: UpdateOneRecipeArgs) {
    return this.recipeService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyRecipe(@NestJsGraphql.Args() args: UpdateManyRecipeArgs) {
    return this.recipeService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Recipe, { nullable: true })
  upsertRecipe(@NestJsGraphql.Args() args: UpsertOneRecipeArgs) {
    return this.recipeService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Recipe, { nullable: true })
  deleteRecipe(@NestJsGraphql.Args() args: DeleteOneRecipeArgs) {
    return this.recipeService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyRecipe(@NestJsGraphql.Args() args: DeleteManyRecipeArgs) {
    return this.recipeService.deleteMany(args)
  }
}

