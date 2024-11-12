import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Profile } from '../models/profile.model'
import { AggregateProfile } from './outputs/AggregateProfile.output'
import { ProfileGroupBy } from './outputs/ProfileGroupBy.output'
import {
  AggregateProfileArgs,
  CreateManyProfileArgs,
  CreateOneProfileArgs,
  DeleteManyProfileArgs,
  DeleteOneProfileArgs,
  FindFirstProfileArgs,
  FindManyProfileArgs,
  FindUniqueProfileArgs,
  GroupByProfileArgs,
  UpdateManyProfileArgs,
  UpdateOneProfileArgs,
  UpsertOneProfileArgs
} from './profile.args'
import { ProfileService } from './profile.service'

@NestJsGraphql.Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) { }

  @NestJsGraphql.Query(() => Profile, { nullable: false })
  findFirstProfile(@NestJsGraphql.Args() args: FindFirstProfileArgs) {
    return this.profileService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Profile, { nullable: false })
  findUniqueProfile(@NestJsGraphql.Args() args: FindUniqueProfileArgs) {
    return this.profileService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Profile], { nullable: false })
  findManyProfile(@NestJsGraphql.Args() args: FindManyProfileArgs) {
    return this.profileService.findMany(args)
  }

  @NestJsGraphql.Query(() => [ProfileGroupBy], { nullable: false })
  groupByProfile(@NestJsGraphql.Args() args: GroupByProfileArgs) {
    return this.profileService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateProfile, { nullable: false })
  aggregateProfile(@NestJsGraphql.Args() args: AggregateProfileArgs) {
    return this.profileService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Profile, { nullable: true })
  createProfile(@NestJsGraphql.Args() args: CreateOneProfileArgs) {
    return this.profileService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyProfile(@NestJsGraphql.Args() args: CreateManyProfileArgs) {
    return this.profileService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Profile, { nullable: true })
  updateProfile(@NestJsGraphql.Args() args: UpdateOneProfileArgs) {
    return this.profileService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyProfile(@NestJsGraphql.Args() args: UpdateManyProfileArgs) {
    return this.profileService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Profile, { nullable: true })
  upsertProfile(@NestJsGraphql.Args() args: UpsertOneProfileArgs) {
    return this.profileService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Profile, { nullable: true })
  deleteProfile(@NestJsGraphql.Args() args: DeleteOneProfileArgs) {
    return this.profileService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyProfile(@NestJsGraphql.Args() args: DeleteManyProfileArgs) {
    return this.profileService.deleteMany(args)
  }
}

