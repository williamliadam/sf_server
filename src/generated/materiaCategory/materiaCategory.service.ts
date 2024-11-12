import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MateriaCategoryService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.MateriaCategoryFindFirstArgs) {
    return await this.prisma.materiaCategory.findFirst(args)
  }

  findUnique(args: Prisma.MateriaCategoryFindUniqueArgs) {
    return this.prisma.materiaCategory.findUnique(args)
  }

  findMany(args: Prisma.MateriaCategoryFindManyArgs) {
    return this.prisma.materiaCategory.findMany(args)
  }

  groupBy(args: Prisma.MateriaCategoryGroupByArgs) {
    // @ts-ignore
    return this.prisma.materiaCategory.groupBy(args)
  }

  aggregate(args: Prisma.MateriaCategoryAggregateArgs) {
    return this.prisma.materiaCategory.aggregate(args)
  }

  create(args: Prisma.MateriaCategoryCreateArgs) {
    return this.prisma.materiaCategory.create(args)
  }

  createMany(args: Prisma.MateriaCategoryCreateManyArgs) {
    return this.prisma.materiaCategory.createMany(args)
  }

  update(args: Prisma.MateriaCategoryUpdateArgs) {
    return this.prisma.materiaCategory.update(args)
  }

  updateMany(args: Prisma.MateriaCategoryUpdateManyArgs) {
    return this.prisma.materiaCategory.updateMany(args)
  }

  upsert(args: Prisma.MateriaCategoryUpsertArgs) {
    return this.prisma.materiaCategory.upsert(args)
  }

  delete(args: Prisma.MateriaCategoryDeleteArgs) {
    return this.prisma.materiaCategory.delete(args)
  }

  deleteMany(args: Prisma.MateriaCategoryDeleteManyArgs) {
    return this.prisma.materiaCategory.deleteMany(args)
  }
}
