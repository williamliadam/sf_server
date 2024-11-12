import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BodyDetailService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.BodyDetailFindFirstArgs) {
    return await this.prisma.bodyDetail.findFirst(args)
  }

  findUnique(args: Prisma.BodyDetailFindUniqueArgs) {
    return this.prisma.bodyDetail.findUnique(args)
  }

  findMany(args: Prisma.BodyDetailFindManyArgs) {
    return this.prisma.bodyDetail.findMany(args)
  }

  groupBy(args: Prisma.BodyDetailGroupByArgs) {
    // @ts-ignore
    return this.prisma.bodyDetail.groupBy(args)
  }

  aggregate(args: Prisma.BodyDetailAggregateArgs) {
    return this.prisma.bodyDetail.aggregate(args)
  }

  create(args: Prisma.BodyDetailCreateArgs) {
    return this.prisma.bodyDetail.create(args)
  }

  createMany(args: Prisma.BodyDetailCreateManyArgs) {
    return this.prisma.bodyDetail.createMany(args)
  }

  update(args: Prisma.BodyDetailUpdateArgs) {
    return this.prisma.bodyDetail.update(args)
  }

  updateMany(args: Prisma.BodyDetailUpdateManyArgs) {
    return this.prisma.bodyDetail.updateMany(args)
  }

  upsert(args: Prisma.BodyDetailUpsertArgs) {
    return this.prisma.bodyDetail.upsert(args)
  }

  delete(args: Prisma.BodyDetailDeleteArgs) {
    return this.prisma.bodyDetail.delete(args)
  }

  deleteMany(args: Prisma.BodyDetailDeleteManyArgs) {
    return this.prisma.bodyDetail.deleteMany(args)
  }
}
