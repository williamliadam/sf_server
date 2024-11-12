import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MealPlanService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.MealPlanFindFirstArgs) {
    return await this.prisma.mealPlan.findFirst(args)
  }

  findUnique(args: Prisma.MealPlanFindUniqueArgs) {
    return this.prisma.mealPlan.findUnique(args)
  }

  findMany(args: Prisma.MealPlanFindManyArgs) {
    return this.prisma.mealPlan.findMany(args)
  }

  groupBy(args: Prisma.MealPlanGroupByArgs) {
    // @ts-ignore
    return this.prisma.mealPlan.groupBy(args)
  }

  aggregate(args: Prisma.MealPlanAggregateArgs) {
    return this.prisma.mealPlan.aggregate(args)
  }

  create(args: Prisma.MealPlanCreateArgs) {
    return this.prisma.mealPlan.create(args)
  }

  createMany(args: Prisma.MealPlanCreateManyArgs) {
    return this.prisma.mealPlan.createMany(args)
  }

  update(args: Prisma.MealPlanUpdateArgs) {
    return this.prisma.mealPlan.update(args)
  }

  updateMany(args: Prisma.MealPlanUpdateManyArgs) {
    return this.prisma.mealPlan.updateMany(args)
  }

  upsert(args: Prisma.MealPlanUpsertArgs) {
    return this.prisma.mealPlan.upsert(args)
  }

  delete(args: Prisma.MealPlanDeleteArgs) {
    return this.prisma.mealPlan.delete(args)
  }

  deleteMany(args: Prisma.MealPlanDeleteManyArgs) {
    return this.prisma.mealPlan.deleteMany(args)
  }
}
