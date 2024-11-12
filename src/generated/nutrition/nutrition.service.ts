import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class NutritionService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.NutritionFindFirstArgs) {
    return await this.prisma.nutrition.findFirst(args)
  }

  findUnique(args: Prisma.NutritionFindUniqueArgs) {
    return this.prisma.nutrition.findUnique(args)
  }

  findMany(args: Prisma.NutritionFindManyArgs) {
    return this.prisma.nutrition.findMany(args)
  }

  groupBy(args: Prisma.NutritionGroupByArgs) {
    // @ts-ignore
    return this.prisma.nutrition.groupBy(args)
  }

  aggregate(args: Prisma.NutritionAggregateArgs) {
    return this.prisma.nutrition.aggregate(args)
  }

  create(args: Prisma.NutritionCreateArgs) {
    return this.prisma.nutrition.create(args)
  }

  createMany(args: Prisma.NutritionCreateManyArgs) {
    return this.prisma.nutrition.createMany(args)
  }

  update(args: Prisma.NutritionUpdateArgs) {
    return this.prisma.nutrition.update(args)
  }

  updateMany(args: Prisma.NutritionUpdateManyArgs) {
    return this.prisma.nutrition.updateMany(args)
  }

  upsert(args: Prisma.NutritionUpsertArgs) {
    return this.prisma.nutrition.upsert(args)
  }

  delete(args: Prisma.NutritionDeleteArgs) {
    return this.prisma.nutrition.delete(args)
  }

  deleteMany(args: Prisma.NutritionDeleteManyArgs) {
    return this.prisma.nutrition.deleteMany(args)
  }
}
