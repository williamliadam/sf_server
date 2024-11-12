import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MaterialService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.MaterialFindFirstArgs) {
    return await this.prisma.material.findFirst(args)
  }

  findUnique(args: Prisma.MaterialFindUniqueArgs) {
    return this.prisma.material.findUnique(args)
  }

  findMany(args: Prisma.MaterialFindManyArgs) {
    return this.prisma.material.findMany(args)
  }

  groupBy(args: Prisma.MaterialGroupByArgs) {
    // @ts-ignore
    return this.prisma.material.groupBy(args)
  }

  aggregate(args: Prisma.MaterialAggregateArgs) {
    return this.prisma.material.aggregate(args)
  }

  create(args: Prisma.MaterialCreateArgs) {
    return this.prisma.material.create(args)
  }

  createMany(args: Prisma.MaterialCreateManyArgs) {
    return this.prisma.material.createMany(args)
  }

  update(args: Prisma.MaterialUpdateArgs) {
    return this.prisma.material.update(args)
  }

  updateMany(args: Prisma.MaterialUpdateManyArgs) {
    return this.prisma.material.updateMany(args)
  }

  upsert(args: Prisma.MaterialUpsertArgs) {
    return this.prisma.material.upsert(args)
  }

  delete(args: Prisma.MaterialDeleteArgs) {
    return this.prisma.material.delete(args)
  }

  deleteMany(args: Prisma.MaterialDeleteManyArgs) {
    return this.prisma.material.deleteMany(args)
  }
}
