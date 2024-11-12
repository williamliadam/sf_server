import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Method } from '../models/method.model'
import {
  AggregateMethodArgs,
  CreateManyMethodArgs,
  CreateOneMethodArgs,
  DeleteManyMethodArgs,
  DeleteOneMethodArgs,
  FindFirstMethodArgs,
  FindManyMethodArgs,
  FindUniqueMethodArgs,
  GroupByMethodArgs,
  UpdateManyMethodArgs,
  UpdateOneMethodArgs,
  UpsertOneMethodArgs
} from './method.args'
import { MethodService } from './method.service'
import { AggregateMethod } from './outputs/AggregateMethod.output'
import { MethodGroupBy } from './outputs/MethodGroupBy.output'

@NestJsGraphql.Resolver(() => Method)
export class MethodResolver {
  constructor(private readonly methodService: MethodService) { }

  @NestJsGraphql.Query(() => Method, { nullable: false })
  findFirstMethod(@NestJsGraphql.Args() args: FindFirstMethodArgs) {
    return this.methodService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Method, { nullable: false })
  findUniqueMethod(@NestJsGraphql.Args() args: FindUniqueMethodArgs) {
    return this.methodService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Method], { nullable: false })
  findManyMethod(@NestJsGraphql.Args() args: FindManyMethodArgs) {
    return this.methodService.findMany(args)
  }

  @NestJsGraphql.Query(() => [MethodGroupBy], { nullable: false })
  groupByMethod(@NestJsGraphql.Args() args: GroupByMethodArgs) {
    return this.methodService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateMethod, { nullable: false })
  aggregateMethod(@NestJsGraphql.Args() args: AggregateMethodArgs) {
    return this.methodService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Method, { nullable: true })
  createMethod(@NestJsGraphql.Args() args: CreateOneMethodArgs) {
    return this.methodService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyMethod(@NestJsGraphql.Args() args: CreateManyMethodArgs) {
    return this.methodService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Method, { nullable: true })
  updateMethod(@NestJsGraphql.Args() args: UpdateOneMethodArgs) {
    return this.methodService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyMethod(@NestJsGraphql.Args() args: UpdateManyMethodArgs) {
    return this.methodService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Method, { nullable: true })
  upsertMethod(@NestJsGraphql.Args() args: UpsertOneMethodArgs) {
    return this.methodService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Method, { nullable: true })
  deleteMethod(@NestJsGraphql.Args() args: DeleteOneMethodArgs) {
    return this.methodService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyMethod(@NestJsGraphql.Args() args: DeleteManyMethodArgs) {
    return this.methodService.deleteMany(args)
  }
}

