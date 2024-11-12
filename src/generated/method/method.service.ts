import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MethodService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.MethodFindFirstArgs) {
    return await this.prisma.method.findFirst(args)
  }

  findUnique(args: Prisma.MethodFindUniqueArgs) {
    return this.prisma.method.findUnique(args)
  }

  findMany(args: Prisma.MethodFindManyArgs) {
    return this.prisma.method.findMany(args)
  }

  groupBy(args: Prisma.MethodGroupByArgs) {
    // @ts-ignore
    return this.prisma.method.groupBy(args)
  }

  aggregate(args: Prisma.MethodAggregateArgs) {
    return this.prisma.method.aggregate(args)
  }

  create(args: Prisma.MethodCreateArgs) {
    return this.prisma.method.create(args)
  }

  createMany(args: Prisma.MethodCreateManyArgs) {
    return this.prisma.method.createMany(args)
  }

  update(args: Prisma.MethodUpdateArgs) {
    return this.prisma.method.update(args)
  }

  updateMany(args: Prisma.MethodUpdateManyArgs) {
    return this.prisma.method.updateMany(args)
  }

  upsert(args: Prisma.MethodUpsertArgs) {
    return this.prisma.method.upsert(args)
  }

  delete(args: Prisma.MethodDeleteArgs) {
    return this.prisma.method.delete(args)
  }

  deleteMany(args: Prisma.MethodDeleteManyArgs) {
    return this.prisma.method.deleteMany(args)
  }
}
