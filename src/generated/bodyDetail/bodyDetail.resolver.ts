import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { BodyDetail } from '../models/bodyDetail.model'
import {
  AggregateBodyDetailArgs,
  CreateManyBodyDetailArgs,
  CreateOneBodyDetailArgs,
  DeleteManyBodyDetailArgs,
  DeleteOneBodyDetailArgs,
  FindFirstBodyDetailArgs,
  FindManyBodyDetailArgs,
  FindUniqueBodyDetailArgs,
  GroupByBodyDetailArgs,
  UpdateManyBodyDetailArgs,
  UpdateOneBodyDetailArgs,
  UpsertOneBodyDetailArgs
} from './bodyDetail.args'
import { BodyDetailService } from './bodyDetail.service'
import { AggregateBodyDetail } from './outputs/AggregateBodyDetail.output'
import { BodyDetailGroupBy } from './outputs/BodyDetailGroupBy.output'

@NestJsGraphql.Resolver(() => BodyDetail)
export class BodyDetailResolver {
  constructor(private readonly bodyDetailService: BodyDetailService) { }

  @NestJsGraphql.Query(() => BodyDetail, { nullable: false })
  findFirstBodyDetail(@NestJsGraphql.Args() args: FindFirstBodyDetailArgs) {
    return this.bodyDetailService.findFirst(args)
  }

  @NestJsGraphql.Query(() => BodyDetail, { nullable: false })
  findUniqueBodyDetail(@NestJsGraphql.Args() args: FindUniqueBodyDetailArgs) {
    return this.bodyDetailService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [BodyDetail], { nullable: false })
  findManyBodyDetail(@NestJsGraphql.Args() args: FindManyBodyDetailArgs) {
    return this.bodyDetailService.findMany(args)
  }

  @NestJsGraphql.Query(() => [BodyDetailGroupBy], { nullable: false })
  groupByBodyDetail(@NestJsGraphql.Args() args: GroupByBodyDetailArgs) {
    return this.bodyDetailService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateBodyDetail, { nullable: false })
  aggregateBodyDetail(@NestJsGraphql.Args() args: AggregateBodyDetailArgs) {
    return this.bodyDetailService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => BodyDetail, { nullable: true })
  createBodyDetail(@NestJsGraphql.Args() args: CreateOneBodyDetailArgs) {
    return this.bodyDetailService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyBodyDetail(@NestJsGraphql.Args() args: CreateManyBodyDetailArgs) {
    return this.bodyDetailService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => BodyDetail, { nullable: true })
  updateBodyDetail(@NestJsGraphql.Args() args: UpdateOneBodyDetailArgs) {
    return this.bodyDetailService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyBodyDetail(@NestJsGraphql.Args() args: UpdateManyBodyDetailArgs) {
    return this.bodyDetailService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => BodyDetail, { nullable: true })
  upsertBodyDetail(@NestJsGraphql.Args() args: UpsertOneBodyDetailArgs) {
    return this.bodyDetailService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => BodyDetail, { nullable: true })
  deleteBodyDetail(@NestJsGraphql.Args() args: DeleteOneBodyDetailArgs) {
    return this.bodyDetailService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyBodyDetail(@NestJsGraphql.Args() args: DeleteManyBodyDetailArgs) {
    return this.bodyDetailService.deleteMany(args)
  }
}

