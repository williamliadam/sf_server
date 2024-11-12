import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DishPlanService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.DishPlanFindFirstArgs) {
    return await this.prisma.dishPlan.findFirst(args)
  }

  findUnique(args: Prisma.DishPlanFindUniqueArgs) {
    return this.prisma.dishPlan.findUnique(args)
  }

  findMany(args: Prisma.DishPlanFindManyArgs) {
    return this.prisma.dishPlan.findMany(args)
  }

  groupBy(args: Prisma.DishPlanGroupByArgs) {
    // @ts-ignore
    return this.prisma.dishPlan.groupBy(args)
  }

  aggregate(args: Prisma.DishPlanAggregateArgs) {
    return this.prisma.dishPlan.aggregate(args)
  }

  create(args: Prisma.DishPlanCreateArgs) {
    return this.prisma.dishPlan.create(args)
  }

  createMany(args: Prisma.DishPlanCreateManyArgs) {
    return this.prisma.dishPlan.createMany(args)
  }

  update(args: Prisma.DishPlanUpdateArgs) {
    return this.prisma.dishPlan.update(args)
  }

  updateMany(args: Prisma.DishPlanUpdateManyArgs) {
    return this.prisma.dishPlan.updateMany(args)
  }

  upsert(args: Prisma.DishPlanUpsertArgs) {
    return this.prisma.dishPlan.upsert(args)
  }

  delete(args: Prisma.DishPlanDeleteArgs) {
    return this.prisma.dishPlan.delete(args)
  }

  deleteMany(args: Prisma.DishPlanDeleteManyArgs) {
    return this.prisma.dishPlan.deleteMany(args)
  }
}
