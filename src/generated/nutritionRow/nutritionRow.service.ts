import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class NutritionRowService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.NutritionRowFindFirstArgs) {
    return await this.prisma.nutritionRow.findFirst(args)
  }

  findUnique(args: Prisma.NutritionRowFindUniqueArgs) {
    return this.prisma.nutritionRow.findUnique(args)
  }

  findMany(args: Prisma.NutritionRowFindManyArgs) {
    return this.prisma.nutritionRow.findMany(args)
  }

  groupBy(args: Prisma.NutritionRowGroupByArgs) {
    // @ts-ignore
    return this.prisma.nutritionRow.groupBy(args)
  }

  aggregate(args: Prisma.NutritionRowAggregateArgs) {
    return this.prisma.nutritionRow.aggregate(args)
  }

  create(args: Prisma.NutritionRowCreateArgs) {
    return this.prisma.nutritionRow.create(args)
  }

  createMany(args: Prisma.NutritionRowCreateManyArgs) {
    return this.prisma.nutritionRow.createMany(args)
  }

  update(args: Prisma.NutritionRowUpdateArgs) {
    return this.prisma.nutritionRow.update(args)
  }

  updateMany(args: Prisma.NutritionRowUpdateManyArgs) {
    return this.prisma.nutritionRow.updateMany(args)
  }

  upsert(args: Prisma.NutritionRowUpsertArgs) {
    return this.prisma.nutritionRow.upsert(args)
  }

  delete(args: Prisma.NutritionRowDeleteArgs) {
    return this.prisma.nutritionRow.delete(args)
  }

  deleteMany(args: Prisma.NutritionRowDeleteManyArgs) {
    return this.prisma.nutritionRow.deleteMany(args)
  }
}
