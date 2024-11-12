import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.ProfileFindFirstArgs) {
    return await this.prisma.profile.findFirst(args)
  }

  findUnique(args: Prisma.ProfileFindUniqueArgs) {
    return this.prisma.profile.findUnique(args)
  }

  findMany(args: Prisma.ProfileFindManyArgs) {
    return this.prisma.profile.findMany(args)
  }

  groupBy(args: Prisma.ProfileGroupByArgs) {
    // @ts-ignore
    return this.prisma.profile.groupBy(args)
  }

  aggregate(args: Prisma.ProfileAggregateArgs) {
    return this.prisma.profile.aggregate(args)
  }

  create(args: Prisma.ProfileCreateArgs) {
    return this.prisma.profile.create(args)
  }

  createMany(args: Prisma.ProfileCreateManyArgs) {
    return this.prisma.profile.createMany(args)
  }

  update(args: Prisma.ProfileUpdateArgs) {
    return this.prisma.profile.update(args)
  }

  updateMany(args: Prisma.ProfileUpdateManyArgs) {
    return this.prisma.profile.updateMany(args)
  }

  upsert(args: Prisma.ProfileUpsertArgs) {
    return this.prisma.profile.upsert(args)
  }

  delete(args: Prisma.ProfileDeleteArgs) {
    return this.prisma.profile.delete(args)
  }

  deleteMany(args: Prisma.ProfileDeleteManyArgs) {
    return this.prisma.profile.deleteMany(args)
  }
}
